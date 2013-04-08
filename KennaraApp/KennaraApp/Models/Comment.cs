using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KennaraApp.Models
{
	public class Comment
	{
		public int ID { get; set; }
		public string UserID { get; set; }
		public string CommentText { get; set; }
		public DateTime CommentDate { get; set; }
		public virtual Lecture Lecture { get; set; }
	}
}