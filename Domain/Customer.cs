using System;

namespace Domain;

public class Customer
{
    public int CustomerID { get; set; }
    public required string FullName { get; set; }
    public required string Phone { get; set; }
    public string? WhatsApp { get; set; }
    public string? Email { get; set; }
    public string? Address { get; set; }
    public DateTime CreatedAt { get; set; }

    public ICollection<Vehicle> Vehicles { get; set; }
    public ICollection<JobOrder> JobOrders { get; set; }
}
