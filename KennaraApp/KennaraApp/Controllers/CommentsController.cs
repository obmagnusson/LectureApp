using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KennaraApp.Models;

namespace KennaraApp.Controllers
{
    public class CommentsController : ApiController
    {
        // GET api/comments
        public IQueryable<Comment> GetComments(int LectureID)
        {
			AppDataContext db = new AppDataContext();

			var c = from comments in db.Comments
					 where comments.Lecture.ID == LectureID
					 select comments;

			return c;
		}

         //GET api/comments/5
		public Comment Get(int id)
		{
			AppDataContext db = new AppDataContext();
			var com = (from comment in db.Comments
					   where comment.ID == id
					   select comment).SingleOrDefault();
			if (com == null)
			{
				// throw new HttpResponseException();
			}

			return com;
		}

        // POST api/comments
        public void Post(Comment comment)
        {
			AppDataContext m_db = new AppDataContext();
		
			comment.CommentDate = DateTime.Now;
			comment.UserID = User.Identity.Name;
			
			m_db.Comments.Add(comment);
			m_db.SaveChanges();		
        }

        // PUT api/comments/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/comments/5
        public void Delete(int id)
        {
        }
    }
}
