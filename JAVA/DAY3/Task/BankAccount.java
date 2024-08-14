package bank;

class BankAccounts
{
	int d;
	void deposit(int d)
	{
		this.d=d;
		System.out.println("Amount deposit...");
	}
	void withdraw()
	{
		System.out.println("Amount withdraw...");
	}
}
class SavingsAccount extends BankAccounts
{
	void withdraw(int w)
	{
		if(d>100)
		{
			System.out.println("Amount withdraw..."+d);
		}
		else
		{
			System.out.println("Amount not withdraw"+	d);
		}
		
	}
}
public class BankAccount {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SavingsAccount s2=new SavingsAccount();
        s2.deposit(1000);
		s2.withdraw(900);
		System.out.println(s2.d);
	}

}
