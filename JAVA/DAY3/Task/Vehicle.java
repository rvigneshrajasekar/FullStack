package bank;
class Vehicles
{
	void drive()
	{
		System.out.println("Repairing a car");
	}
}
class Car extends Vehicles
{
	void drive()
	{
		System.out.println("Repairing a car");
	}
}

public class Vehicle {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vehicles c1=new Car();
          c1.drive();
	}

}
