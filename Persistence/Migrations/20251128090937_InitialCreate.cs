using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FullName = table.Column<string>(type: "TEXT", nullable: false),
                    Phone = table.Column<string>(type: "TEXT", nullable: false),
                    WhatsApp = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Address = table.Column<string>(type: "TEXT", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerID);
                });

            migrationBuilder.CreateTable(
                name: "Parts",
                columns: table => new
                {
                    PartID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PartName = table.Column<string>(type: "TEXT", nullable: false),
                    PartNumber = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    DefaultUnitPrice = table.Column<decimal>(type: "TEXT", nullable: true),
                    Notes = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parts", x => x.PartID);
                });

            migrationBuilder.CreateTable(
                name: "ServiceTypes",
                columns: table => new
                {
                    ServiceTypeID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    DefaultPrice = table.Column<decimal>(type: "TEXT", nullable: true),
                    IsRequiresDetails = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceTypes", x => x.ServiceTypeID);
                });

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    VehicleID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CustomerID = table.Column<int>(type: "INTEGER", nullable: false),
                    PlateNumber = table.Column<string>(type: "TEXT", nullable: false),
                    ChassisNo = table.Column<string>(type: "TEXT", nullable: false),
                    Make = table.Column<string>(type: "TEXT", nullable: false),
                    Model = table.Column<string>(type: "TEXT", nullable: false),
                    Year = table.Column<int>(type: "INTEGER", nullable: true),
                    Color = table.Column<string>(type: "TEXT", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.VehicleID);
                    table.ForeignKey(
                        name: "FK_Vehicles_Customers_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customers",
                        principalColumn: "CustomerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobOrders",
                columns: table => new
                {
                    JobOrderID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CustomerID = table.Column<int>(type: "INTEGER", nullable: false),
                    VehicleID = table.Column<int>(type: "INTEGER", nullable: false),
                    DateIn = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ExpectedDateOut = table.Column<DateTime>(type: "TEXT", nullable: true),
                    ActualDateOut = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Odometer = table.Column<int>(type: "INTEGER", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobOrders", x => x.JobOrderID);
                    table.ForeignKey(
                        name: "FK_JobOrders_Customers_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customers",
                        principalColumn: "CustomerID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobOrders_Vehicles_VehicleID",
                        column: x => x.VehicleID,
                        principalTable: "Vehicles",
                        principalColumn: "VehicleID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobServices",
                columns: table => new
                {
                    JobServiceID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    JobOrderID = table.Column<int>(type: "INTEGER", nullable: false),
                    ServiceTypeID = table.Column<int>(type: "INTEGER", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Quantity = table.Column<decimal>(type: "TEXT", nullable: false),
                    UnitPrice = table.Column<decimal>(type: "TEXT", nullable: false),
                    Discount = table.Column<decimal>(type: "TEXT", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "TEXT", nullable: false),
                    Status = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobServices", x => x.JobServiceID);
                    table.ForeignKey(
                        name: "FK_JobServices_JobOrders_JobOrderID",
                        column: x => x.JobOrderID,
                        principalTable: "JobOrders",
                        principalColumn: "JobOrderID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobServices_ServiceTypes_ServiceTypeID",
                        column: x => x.ServiceTypeID,
                        principalTable: "ServiceTypes",
                        principalColumn: "ServiceTypeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VehicleConditionHeaders",
                columns: table => new
                {
                    ConditionID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    JobOrderID = table.Column<int>(type: "INTEGER", nullable: false),
                    ConditionDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    InspectedBy = table.Column<string>(type: "TEXT", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleConditionHeaders", x => x.ConditionID);
                    table.ForeignKey(
                        name: "FK_VehicleConditionHeaders_JobOrders_JobOrderID",
                        column: x => x.JobOrderID,
                        principalTable: "JobOrders",
                        principalColumn: "JobOrderID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobServiceParts",
                columns: table => new
                {
                    JobServicePartID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    JobServiceID = table.Column<int>(type: "INTEGER", nullable: false),
                    PartID = table.Column<int>(type: "INTEGER", nullable: false),
                    Quantity = table.Column<decimal>(type: "TEXT", nullable: false),
                    UnitPrice = table.Column<decimal>(type: "TEXT", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "TEXT", nullable: false),
                    WarrantyMonths = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobServiceParts", x => x.JobServicePartID);
                    table.ForeignKey(
                        name: "FK_JobServiceParts_JobServices_JobServiceID",
                        column: x => x.JobServiceID,
                        principalTable: "JobServices",
                        principalColumn: "JobServiceID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobServiceParts_Parts_PartID",
                        column: x => x.PartID,
                        principalTable: "Parts",
                        principalColumn: "PartID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PaintDetails",
                columns: table => new
                {
                    PaintDetailID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    JobServiceID = table.Column<int>(type: "INTEGER", nullable: false),
                    PaintType = table.Column<string>(type: "TEXT", nullable: false),
                    PaintBrand = table.Column<string>(type: "TEXT", nullable: false),
                    ColorCode = table.Column<string>(type: "TEXT", nullable: false),
                    AreaPainted = table.Column<string>(type: "TEXT", nullable: false),
                    LayersCount = table.Column<int>(type: "INTEGER", nullable: true),
                    Notes = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaintDetails", x => x.PaintDetailID);
                    table.ForeignKey(
                        name: "FK_PaintDetails_JobServices_JobServiceID",
                        column: x => x.JobServiceID,
                        principalTable: "JobServices",
                        principalColumn: "JobServiceID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VehicleConditionDetails",
                columns: table => new
                {
                    ConditionDetailId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ConditionID = table.Column<int>(type: "INTEGER", nullable: false),
                    AreaType = table.Column<string>(type: "TEXT", nullable: false),
                    AreaName = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Severity = table.Column<string>(type: "TEXT", nullable: false),
                    HasPhotos = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleConditionDetails", x => x.ConditionDetailId);
                    table.ForeignKey(
                        name: "FK_VehicleConditionDetails_VehicleConditionHeaders_ConditionID",
                        column: x => x.ConditionID,
                        principalTable: "VehicleConditionHeaders",
                        principalColumn: "ConditionID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ConditionPhotos",
                columns: table => new
                {
                    PhotoId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ConditionDetailID = table.Column<int>(type: "INTEGER", nullable: false),
                    FilePath = table.Column<string>(type: "TEXT", nullable: false),
                    TakenAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConditionPhotos", x => x.PhotoId);
                    table.ForeignKey(
                        name: "FK_ConditionPhotos_VehicleConditionDetails_ConditionDetailID",
                        column: x => x.ConditionDetailID,
                        principalTable: "VehicleConditionDetails",
                        principalColumn: "ConditionDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ConditionPhotos_ConditionDetailID",
                table: "ConditionPhotos",
                column: "ConditionDetailID");

            migrationBuilder.CreateIndex(
                name: "IX_JobOrders_CustomerID",
                table: "JobOrders",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_JobOrders_VehicleID",
                table: "JobOrders",
                column: "VehicleID");

            migrationBuilder.CreateIndex(
                name: "IX_JobServiceParts_JobServiceID",
                table: "JobServiceParts",
                column: "JobServiceID");

            migrationBuilder.CreateIndex(
                name: "IX_JobServiceParts_PartID",
                table: "JobServiceParts",
                column: "PartID");

            migrationBuilder.CreateIndex(
                name: "IX_JobServices_JobOrderID",
                table: "JobServices",
                column: "JobOrderID");

            migrationBuilder.CreateIndex(
                name: "IX_JobServices_ServiceTypeID",
                table: "JobServices",
                column: "ServiceTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_PaintDetails_JobServiceID",
                table: "PaintDetails",
                column: "JobServiceID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VehicleConditionDetails_ConditionID",
                table: "VehicleConditionDetails",
                column: "ConditionID");

            migrationBuilder.CreateIndex(
                name: "IX_VehicleConditionHeaders_JobOrderID",
                table: "VehicleConditionHeaders",
                column: "JobOrderID");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_CustomerID",
                table: "Vehicles",
                column: "CustomerID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConditionPhotos");

            migrationBuilder.DropTable(
                name: "JobServiceParts");

            migrationBuilder.DropTable(
                name: "PaintDetails");

            migrationBuilder.DropTable(
                name: "VehicleConditionDetails");

            migrationBuilder.DropTable(
                name: "Parts");

            migrationBuilder.DropTable(
                name: "JobServices");

            migrationBuilder.DropTable(
                name: "VehicleConditionHeaders");

            migrationBuilder.DropTable(
                name: "ServiceTypes");

            migrationBuilder.DropTable(
                name: "JobOrders");

            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
