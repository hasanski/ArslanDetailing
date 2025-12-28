using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Vehicle> Vehicles { get; set; }
    public DbSet<JobOrder> JobOrders { get; set; }
    public DbSet<ServiceType> ServiceTypes { get; set; }
    public DbSet<Part> Parts { get; set; }
    public DbSet<JobService> JobServices { get; set; }
    public DbSet<JobServicePart> JobServiceParts { get; set; }
    public DbSet<PaintDetail> PaintDetails { get; set; }
    public DbSet<VehicleConditionHeader> VehicleConditionHeaders { get; set; }
    public DbSet<VehicleConditionDetail> VehicleConditionDetails { get; set; }
    public DbSet<ConditionPhoto> ConditionPhotos { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // كل الفلuent API تحت ↓

        modelBuilder.Entity<Vehicle>()
            .HasOne(v => v.Customer)
            .WithMany(c => c.Vehicles)
            .HasForeignKey(v => v.CustomerID);

        modelBuilder.Entity<JobOrder>()
            .HasOne(j => j.Customer)
            .WithMany(c => c.JobOrders)
            .HasForeignKey(j => j.CustomerID);

        modelBuilder.Entity<JobOrder>()
            .HasOne(j => j.Vehicle)
            .WithMany(v => v.JobOrders)
            .HasForeignKey(j => j.VehicleID);

        modelBuilder.Entity<VehicleConditionHeader>()
            .HasOne(h => h.JobOrder)
            .WithMany(j => j.ConditionHeaders)
            .HasForeignKey(h => h.JobOrderID);

        modelBuilder.Entity<VehicleConditionDetail>()
            .HasOne(d => d.ConditionHeader)
            .WithMany(h => h.ConditionDetails)
            .HasForeignKey(d => d.ConditionID);

        modelBuilder.Entity<ConditionPhoto>()
            .HasOne(p => p.ConditionDetail)
            .WithMany(d => d.Photos)
            .HasForeignKey(p => p.ConditionDetailID);

        modelBuilder.Entity<JobService>()
            .HasOne(js => js.JobOrder)
            .WithMany(jo => jo.JobServices)
            .HasForeignKey(js => js.JobOrderID);

        modelBuilder.Entity<JobService>()
            .HasOne(js => js.ServiceType)
            .WithMany(st => st.JobServices)
            .HasForeignKey(js => js.ServiceTypeID);

        // JobService ↔ PaintDetail (One-to-One)
        modelBuilder.Entity<JobService>()
            .HasOne(js => js.PaintDetail)
            .WithOne(pd => pd.JobService)
            .HasForeignKey<PaintDetail>(pd => pd.JobServiceID);

        modelBuilder.Entity<JobServicePart>()
            .HasOne(jsp => jsp.JobService)
            .WithMany(js => js.JobServiceParts)
            .HasForeignKey(jsp => jsp.JobServiceID);

        modelBuilder.Entity<JobServicePart>()
            .HasOne(jsp => jsp.Part)
            .WithMany(p => p.JobServiceParts)
            .HasForeignKey(jsp => jsp.PartID);

        modelBuilder.Entity<ConditionPhoto>()
            .HasKey(p => p.PhotoId);   // أو p.PhotoID حسب اسم الخاصية عندك
        modelBuilder.Entity<VehicleConditionHeader>()
            .HasKey(h => h.ConditionID);
        modelBuilder.Entity<VehicleConditionDetail>()
        .HasKey(h => h.ConditionDetailId);
    }
}
