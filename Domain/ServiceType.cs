using System;

namespace Domain;

public class ServiceType
{
    public int ServiceTypeID { get; set; }
    public string Name { get; set; }
    public decimal? DefaultPrice { get; set; }
    public bool IsRequiresDetails { get; set; }

    public ICollection<JobService> JobServices { get; set; }
}
