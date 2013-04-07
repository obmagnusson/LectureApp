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
        public IEnumerable<Comment> Get()
        {
			AppDataContext db = new AppDataContext();
			return db.Comments;
        }

        // GET api/comments/5
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
        public void Post([FromBody]string value)
        {

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
