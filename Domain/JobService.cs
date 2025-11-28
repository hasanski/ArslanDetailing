using System;

namespace Domain;

public class JobService
{
    public int JobServiceID { get; set; }
    public int JobOrderID { get; set; }
    public int ServiceTypeID { get; set; }

    public string Description { get; set; }
    public decimal Quantity { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal Discount { get; set; }
    public decimal TotalPrice { get; set; }
    public string Status { get; set; }

    public JobOrder JobOrder { get; set; }
    public ServiceType ServiceType { get; set; }

    public PaintDetail PaintDetail { get; set; }
    public ICollection<JobServicePart> JobServiceParts { get; set; }
}
