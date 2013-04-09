using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace KennaraApp.Models
{
	public class Lecture
	{
		public int ID { get; set; }
		public string Title { get; set; }
		public string LectureUrl { get; set; }
		public DateTime DatePublished { get; set; }
	}
}