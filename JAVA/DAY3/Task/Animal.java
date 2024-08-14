package bank;

class Animals
{
	void makesound()
	{
		System.out.println("Animal make sound");
	}
}
class Cat extends Animals
{
	void makesound()
	{
		System.out.println("Bark");
	}
}

public class Animal {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Animals c1=new Cat();
        c1.makesound();
	}

}
