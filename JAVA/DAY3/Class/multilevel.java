package day3;
//single inheritance
class Vehicle{
void noofEngine() {
	System.out.println("I have one Engine");
}
}
class twowheeler extends Vehicle{
	void noofwheels() {
	System.out.println("I have two wheels");
}
}
class bike extends twowheeler{
	void brandname() {
		System.out.println("Brand Name is honda");
	}
	}
class scooty extends twowheeler{
	void brandname() {
		System.out.println("Brand Name is activa");
	}
	}
public class multilevel {
	public static void main(String[] args) {
		bike b =new bike();
		b.noofEngine();
		b.noofwheels();
		b.brandname();
		
		scooty scooty =new scooty();
		scooty.noofEngine();
		scooty.noofwheels();
		scooty.brandname();
	}

}
