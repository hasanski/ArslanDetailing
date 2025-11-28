using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedDataAsync(AppDbContext context)
    {
        Console.WriteLine("Seeding initial data...");

        if (context.ServiceTypes.Any()) return;

        var serviceTypes = new List<ServiceType>
        {
            new ServiceType
        {
            ServiceTypeID = 1,
            Name = "Dry Clean - دراي كلين",
            DefaultPrice = 25.00m,
            IsRequiresDetails = false
        },
        new ServiceType
        {
            ServiceTypeID = 2,
            Name = "Polish - بولش",
            DefaultPrice = 30.00m,
            IsRequiresDetails = false
        },
        new ServiceType
        {
            ServiceTypeID = 3,
            Name = "Paint - دهان سيارة",
            DefaultPrice = 100.00m,
            IsRequiresDetails = true   // لأنه يحتاج مواصفات وتفاصيل دهان
        },
        new ServiceType
        {
            ServiceTypeID = 4,
            Name = "Body Repair - تجليس",
            DefaultPrice = 80.00m,
            IsRequiresDetails = false
        },
        new ServiceType
        {
            ServiceTypeID = 5,
            Name = "Parts Replacement - تغيير قطع",
            DefaultPrice = 0.00m,      // السعر يتحدد حسب القطع
            IsRequiresDetails = false
        }
        };
        context.ServiceTypes.AddRange(serviceTypes);
        await context.SaveChangesAsync();


        if (context.Parts.Any()) return;

        var parts = new List<Part>
            {
                new Part
    {
        PartID = 1,
        PartName = "Front Bumper - صدام أمامي",
        PartNumber = "FB-001",
        Category = "Body",
        DefaultUnitPrice = 120.00m,
        Notes = "صدام أمامي يناسب أغلب السيارات"
    },
    new Part
    {
        PartID = 2,
        PartName = "Rear Bumper - صدام خلفي",
        PartNumber = "RB-002",
        Category = "Body",
        DefaultUnitPrice = 130.00m,
        Notes = null
    },
    new Part
    {
        PartID = 3,
        PartName = "Left Headlight - فانوس أمامي يسار",
        PartNumber = "HL-L-003",
        Category = "Lights",
        DefaultUnitPrice = 90.00m,
        Notes = null
    },
    new Part
    {
        PartID = 4,
        PartName = "Right Headlight - فانوس أمامي يمين",
        PartNumber = "HL-R-004",
        Category = "Lights",
        DefaultUnitPrice = 90.00m,
        Notes = null
    },
    new Part
    {
        PartID = 5,
        PartName = "Side Mirror Left - مراية جانبية يسار",
        PartNumber = "SM-L-005",
        Category = "Body",
        DefaultUnitPrice = 35.00m,
        Notes = null
    },
    new Part
    {
        PartID = 6,
        PartName = "Side Mirror Right - مراية جانبية يمين",
        PartNumber = "SM-R-006",
        Category = "Body",
        DefaultUnitPrice = 35.00m,
        Notes = null
    },
    new Part
    {
        PartID = 7,
        PartName = "Front Brake Pads - فحمات أمامية",
        PartNumber = "FBP-007",
        Category = "Brakes",
        DefaultUnitPrice = 40.00m,
        Notes = null
    },
    new Part
    {
        PartID = 8,
        PartName = "Rear Brake Pads - فحمات خلفية",
        PartNumber = "RBP-008",
        Category = "Brakes",
        DefaultUnitPrice = 45.00m,
        Notes = null
    },
    new Part
    {
        PartID = 9,
        PartName = "Engine Oil Filter - فلتر زيت",
        PartNumber = "EOF-009",
        Category = "Maintenance",
        DefaultUnitPrice = 10.00m,
        Notes = null
    },
    new Part
    {
        PartID = 10,
        PartName = "Air Filter - فلتر هواء",
        PartNumber = "AF-010",
        Category = "Maintenance",
        DefaultUnitPrice = 12.00m,
        Notes = null
    },
    new Part
    {
        PartID = 11,
        PartName = "Spark Plug - بوجيه",
        PartNumber = "SP-011",
        Category = "Maintenance",
        DefaultUnitPrice = 7.50m,
        Notes = null
    },
    new Part
    {
        PartID = 12,
        PartName = "Radiator - ردييتر",
        PartNumber = "RAD-012",
        Category = "Cooling",
        DefaultUnitPrice = 160.00m,
        Notes = "قطعة رئيسية للتبريد"
    }
            };
        context.Parts.AddRange(parts);
        await context.SaveChangesAsync();


    }
}
