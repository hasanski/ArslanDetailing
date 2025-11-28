using System;

namespace Domain;

public class ConditionPhoto
{// ✅ EF يتعرف على PhotoId أو PhotoID تلقائيًا كمفتاح
    public int PhotoId { get; set; }   // أو PhotoID، المهم يكون int وفيه get; set;

    public int ConditionDetailID { get; set; }

    public string FilePath { get; set; }
    public DateTime TakenAt { get; set; }
    public string Notes { get; set; }

    public VehicleConditionDetail ConditionDetail { get; set; }
}
