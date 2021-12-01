import 'package:flutter/material.dart';
import 'package:inindia/home.dart';
import 'package:inindia/otp.dart';

class PhoneSignup extends StatefulWidget {
  const PhoneSignup({ Key? key }) : super(key: key);

  @override
  _PhoneSignupState createState() => _PhoneSignupState();
}

class _PhoneSignupState extends State<PhoneSignup> {
  @override
  Widget build(BuildContext context) {
    return  SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          alignment: Alignment.center,
          child: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Column(
              children:  <Widget>[
                const Image(image: AssetImage('assets/brand.png'),
                width: 180,
                height: 180,
                
                ),
               
                const Text('Welcome to AitrJobs',
                style: TextStyle(
                  fontSize: 19,
                   fontWeight: FontWeight.bold
                   ),
                   ),
                   const SizedBox(height: 15,),
                SizedBox(
                  width: MediaQuery.of(context).size.width*0.72,
                  child: const Text(
                    
                    'AitrJobs provide facility of JEE Mains-Advanced, NEET, Foundation and Board level facility with pool of all coaching owner and school direction of PAN INDIA with 15,000 faculty member',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 15.5,
                      fontWeight: FontWeight.w400
                    ),
                    )
                    ),
                    const SizedBox(height: 60,),
                    SizedBox(
                      width: MediaQuery.of(context).size.width*0.8,
                      child: TextFormField(
                        textAlign: TextAlign.center,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration( 
                          hintText: 'Enter phone number',
                          hintStyle: const TextStyle(
                            fontSize: 15.5,
                            fontWeight: FontWeight.w400
                          
                          ),
                          
                          labelStyle: const TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.w400
                          ),
                         
                          border: OutlineInputBorder(
                            
                            borderRadius: BorderRadius.circular(10)
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: const BorderSide(
                              color: Colors.black,
                              width: 2
                            ),
                            borderRadius: BorderRadius.circular(10)
                          )
                        ),
                      ),
                      
                    ),
                    const SizedBox(height: 15,),
                   ElevatedButton(onPressed: (){
                      Navigator.push(context, MaterialPageRoute(builder: (context)=>const OtpPage()));
                    
                   },
            
            child: Container(
              alignment: Alignment.center,
              width: MediaQuery.of(context).size.width*0.74,
              padding: const EdgeInsets.all(8.0),
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: Text('Send OTP',
                style: TextStyle(fontSize: 17),),
              ),
            ),
            style:  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFF2E55FA)),
            shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0))),
            )
            
            ),
            const SizedBox(height: 15,),

            SizedBox(
              width: MediaQuery.of(context).size.width*0.8,
              child: Row(
                children: const [
                  Expanded(child: 
                  SizedBox(width: 20, height: 1.5,
                  child: DecoratedBox(
                  decoration:  BoxDecoration(
                    color: Colors.black
    ),
  ),
                  ),
                  
                  ),

                  
                  SizedBox(width: 20, height: 1.5,),
                  
                  
                  Text('Or',
                 
                  style: TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w400,
                    color: Colors.blue,
                  
                  ),),
                  SizedBox(width: 20, height: 1.5,),
                  Expanded(child: SizedBox(width: 20, height: 1.5,
                  child: DecoratedBox(
                  decoration:  BoxDecoration(
                    color: Colors.black
                    ),
                    ),
                  ),),
                ],
              ),
            ),
            const SizedBox(height: 15,),
                   ElevatedButton(onPressed: (){    
                   },
              
            child: Container(
             
              alignment: Alignment.center,
              width: MediaQuery.of(context).size.width*0.74,
              padding: const EdgeInsets.all(8.0),
              child:  Padding(
                padding: const EdgeInsets.all(0),
                child: Row(
                  children: const [
                    Image(image: NetworkImage('https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png',
                    
                    ), width: 55, height: 45,
                    ),
                    SizedBox(width: 25,),
                    Text('Sign up with Email',
                    style: TextStyle(
                      fontSize: 19,
                      color: Colors.black),
                    ),
                  ],
                ),

              ),
            ),
            style:  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFFFFFFFF)),
            side: MaterialStateProperty.all(const BorderSide(color: Colors.black26,width: 1)),
            shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0))),

            )
            
            ),
            const SizedBox(height: 15,),
            Container(
              alignment: Alignment.center,
              padding: const EdgeInsets.symmetric(horizontal:25.0),
              child: Row(
                children: [
                              const SizedBox(height: 15,),
                     Container(
                       margin: const EdgeInsets.only(left: 20),
                       child: ElevatedButton(onPressed: (){    
                       },
                
              child: Container(
               
                alignment: Alignment.center,
                width: MediaQuery.of(context).size.width*0.3,
                padding: const EdgeInsets.all(8.0),
                child: Padding(
                  padding: const EdgeInsets.all(0),
                  child: Row(
                    children: const [
                       Image(image: NetworkImage('https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
                    
                    ), width: 35, height: 35,
                    ),
                    SizedBox(width: 5,),
                      Text('Facebook',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black),
                      ),
                    ],
                  ),

                ),
              ),
              style:  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFFFFFFFF)),
              side: MaterialStateProperty.all(const BorderSide(color: Colors.black26,width: 1)),
              shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0))),

              )
              
              ),
                     ),

                          const SizedBox(width: 15,),
                     Container(
                       margin: const EdgeInsets.only(left: 20),
                       child: ElevatedButton(onPressed: (){    
                       },
                
              child: Container(
               
                alignment: Alignment.center,
                width: MediaQuery.of(context).size.width*0.3,
                padding: const EdgeInsets.all(8.0),
                child:  Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    children: const [
                      Image(image: NetworkImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
                    
                    ), width: 20, height: 20,
                    ),
                    SizedBox(width: 15,),
                      Text('Google',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black),
                      ),
                    ],
                  ),

                ),
              ),
              style:  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFFFFFFFF)),
              side: MaterialStateProperty.all(const BorderSide(color: Colors.black26,width: 1)),
              shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0))),

              )
              
              ),
                     ),
                ],
              ),
            ),
            const SizedBox(height: 70,),

             ElevatedButton(onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>const HomePage()));
              
             },
            
            child: Container(
              alignment: Alignment.center,
              width: MediaQuery.of(context).size.width*0.74,
              padding: const EdgeInsets.all(8.0),
              child: const Padding(
                padding: EdgeInsets.all(6.0),
                child: Text('Skip the Login and Sign up',
                style: TextStyle(fontSize: 23),),
              ),
            ),
            style:  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFF2E55FA)),
            shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0))),
            )
            
            ),
            const SizedBox(height: 45,),
              ],
            ),
          ),
        ),
        
      ),
    );
  }
}