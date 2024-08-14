package bank;

class Employee1
{
	void work()
	{
		System.out.println("Employeer Working....");
	}
	void getSalary()
	{
		System.out.println("Employeer Salary deposit.. ");
	}
}
class HRManager extends Employee1
{
	void work()
	{
		System.out.println("Employeer Working....");
	}
	void addEmployee()
	{
		System.out.println("Employeer Added...");
	}
}
public class Employees {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HRManager h1=new HRManager();
		h1.addEmployee();
		h1.work();
	}

}
