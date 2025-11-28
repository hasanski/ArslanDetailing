using System;

namespace Domain;

public class PaintDetail
{
    public int PaintDetailID { get; set; }
    public int JobServiceID { get; set; }

    public string PaintType { get; set; }
    public string PaintBrand { get; set; }
    public string ColorCode { get; set; }
    public string AreaPainted { get; set; }
    public int? LayersCount { get; set; }
    public string Notes { get; set; }

    public JobService JobService { get; set; }
}
