using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using KennaraApp.Models;

namespace KennaraApp.Controllers
{
    public class LecturesController : ApiController
    {
        // GET api/lectures
        public IEnumerable<Lecture> Get()
        {
			AppDataContext db = new AppDataContext();
            return db.Lectures;
        }

        // GET api/lectures/5
        public Lecture Get(int id)
        {
			AppDataContext db = new AppDataContext();
			var lec = (from lecture in db.Lectures
						   where lecture.ID == id
						   select lecture).SingleOrDefault();
			if (lec == null) { 
				// throw new HttpResponseException();
			}

            return lec;
        }

        // POST api/lectures
        public void Post(Lecture lecture)
        {
			AppDataContext m_db = new AppDataContext();
			string lectureUrl = lecture.LectureUrl;

			StringBuilder b = new StringBuilder(lectureUrl);

			b.Replace( "watch?v=", "embed/");
			
			string nstr = b.ToString();
			lecture.LectureUrl = nstr ;

			lecture.DatePublished = DateTime.Now;
			m_db.Lectures.Add(lecture);
			m_db.SaveChanges();			
        }

        // PUT api/lectures/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/lectures/5
        public void Delete(int id)
        {
        }
    }
}
