using System;

namespace Domain;

public class VehicleConditionDetail
{
    // ✅ هذا هو الـ Primary Key
    public int ConditionDetailId { get; set; }   // أو ConditionDetailID

    // FK إلى VehicleConditionHeader
    public int ConditionID { get; set; }

    public string AreaType { get; set; }       // Interior / Exterior / Engine
    public string AreaName { get; set; }
    public string Description { get; set; }
    public string Severity { get; set; }
    public bool HasPhotos { get; set; }

    public VehicleConditionHeader ConditionHeader { get; set; }
    public ICollection<ConditionPhoto> Photos { get; set; }
}
