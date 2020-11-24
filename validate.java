import java.io.*; 
import javax.servlet.*; 
import javax.servlet.http.*; 
import java.util.regex.*; 

public class Prog1 extends HttpServlet { 
   public void doPost(HttpServletRequest request, HttpServletResponse res) throws  ServletException, IOException 
	{ 
		res.setContentType("text/html"); 
		PrintWriter pw = res.getWriter(); 
		String text = "<html><body>"; 
		String name = request.getParameter("name"); 
        String pwd = request.getParameter("pwd");
		String email = request.getParameter("email"); 
		String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+  
 		"[a-zA-Z0-9_+&*-]+)*@" +  
 		"(?:[a-zA-Z0-9-]+\\.)+[a-z" +  
 		"A-Z]{2,7}$";  
		int status = -1; 
		if(name.isEmpty()) 
		{ 
			status = 0; 
			//pw.println("<h2>First name is empty!</h2>"); 
			text = text + "<h2>Name is empty!</h2>"; 
		} 

        Pattern patpswd = Pattern.compile(pswdRegex);
		if(!patpswd.matcher(pwd).matches()) 
		{	 
			status = 0; 
			//pw.println("<h2>Passwords do not match!</h2>"); 
			text = text + "<h2>Invalid password!</h2>"; 
		} 
 
		Pattern pat = Pattern.compile(emailRegex);  
		if(!pat.matcher(email).matches()) 
		{ 
			status = 0; 
			//pw.println("<h2>Invalid email!</h2>"); 
			text = text + "<h2>Invalid email!</h2>"; 
		} 
		if(status == -1) 
			res.sendRedirect("Assignment5.html"); 
		else 
		{ 
			pw.println(text); 
			pw.println("<a href = 'Assignment5.html'>Go back to Login Page</a>"); 
			pw.println("</body></html>"); 
			pw.close(); 
		} 
	} 
}
