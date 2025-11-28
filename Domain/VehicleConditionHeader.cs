using System;

namespace Domain;

public class VehicleConditionHeader
{
    public int ConditionID { get; set; }
    public int JobOrderID { get; set; }

    public DateTime ConditionDate { get; set; }
    public string InspectedBy { get; set; }
    public string Notes { get; set; }

    public JobOrder JobOrder { get; set; }
    public ICollection<VehicleConditionDetail> ConditionDetails { get; set; }
}
