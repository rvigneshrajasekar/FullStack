package bank;
class Shapes
{
	void getarea()
	{
		System.out.println("Area of rectangle");
	}
}
class Rectangle extends Shapes
{
	void getarea(int l,int b)
	{
		System.out.println("Area of rectangle "+l*b);
	}
}
public class Shape {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Rectangle r1=new Rectangle();
		r1.getarea(10, 20);
	}

}
