class test
{    
    static int value=1;
     public static  void main(String args[])
    {
       
        System.out.print(++value);
        System.out.print(value++);
        System.out.print(value);
    }
    public static void changvalue(int value)
    {
        value = value+100;
    }
}