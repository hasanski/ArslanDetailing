using System;

namespace Domain;

public class Vehicle
{
    public int VehicleID { get; set; }
    public int CustomerID { get; set; }

    public string PlateNumber { get; set; }
    public string ChassisNo { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int? Year { get; set; }
    public string Color { get; set; }
    public string Notes { get; set; }

    public Customer Customer { get; set; }
    public ICollection<JobOrder> JobOrders { get; set; }
}
