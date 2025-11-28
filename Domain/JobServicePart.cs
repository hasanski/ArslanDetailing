using System;

namespace Domain;

public class JobServicePart
{
    public int JobServicePartID { get; set; }
    public int JobServiceID { get; set; }
    public int PartID { get; set; }

    public decimal Quantity { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal TotalPrice { get; set; }
    public int? WarrantyMonths { get; set; }

    public JobService JobService { get; set; }
    public Part Part { get; set; }
}
