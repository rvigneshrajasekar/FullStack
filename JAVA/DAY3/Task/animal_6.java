package bank;

class Animals6
{
	void move() {
		System.out.println("Animal ");
	}
}
class Cheetah extends Animals6
{
	void move() {
		System.out.println("RUN");
	}
}

public class animal_6 {
	public static void main(String[] args) {
		Animals6 ch = new Cheetah();
		ch.move();
	}
}