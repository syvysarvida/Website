using Microsoft.EntityFrameworkCore;
using JwtAuthDemo.Models;


namespace JwtAuthDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        // Add DbSet properties here
        public DbSet<User> Users { get; set; }
    }
}
