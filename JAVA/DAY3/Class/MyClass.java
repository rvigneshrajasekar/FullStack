package day3;

class A{
	int a=10;
	A(String name){
		System.out.println("Welcome "+name);
	}
	void mymethod1() {
		System.out.println("I am a super class method");
	}
	}
class B extends A{
	B(){
		super("vicky");
	}
	void mymethod2() {
		System.out.println("Super class varible :"+super.a);
		super.mymethod1();
	}
}
public class MyClass {
	public static void main (String []args) {
		B b=new B();
		b.mymethod2();
	}

}
