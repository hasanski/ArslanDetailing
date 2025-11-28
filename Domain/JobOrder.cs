using System;

namespace Domain;

public class JobOrder
{
    public int JobOrderID { get; set; }
    public int CustomerID { get; set; }
    public int VehicleID { get; set; }

    public DateTime DateIn { get; set; }
    public DateTime? ExpectedDateOut { get; set; }
    public DateTime? ActualDateOut { get; set; }
    public int? Odometer { get; set; }
    public string Status { get; set; }
    public string? Notes { get; set; }

    public Customer Customer { get; set; }
    public Vehicle Vehicle { get; set; }

    public ICollection<VehicleConditionHeader> ConditionHeaders { get; set; }
    public ICollection<JobService> JobServices { get; set; }
}
