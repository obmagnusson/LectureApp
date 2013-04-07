﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace KennaraApp.Models
{
	public class AppDataContext : DbContext 
	{
		public DbSet<Lecture> Lectures { get; set;}
		public DbSet<Comment> Comments { get; set;}
	}
}