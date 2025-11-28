using System;

namespace Domain;

public class Part
{
    public int PartID { get; set; }
    public string PartName { get; set; }
    public string PartNumber { get; set; }
    public string Category { get; set; }
    public decimal? DefaultUnitPrice { get; set; }
    public string? Notes { get; set; }

    public ICollection<JobServicePart> JobServiceParts { get; set; }
}
