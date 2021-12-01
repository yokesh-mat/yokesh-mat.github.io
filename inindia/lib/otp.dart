import 'package:flutter/material.dart';

import 'home.dart';

class OtpPage extends StatefulWidget {
  const OtpPage({ Key? key }) : super(key: key);

  @override
  _OtpPageState createState() => _OtpPageState();
}

class _OtpPageState extends State<OtpPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        alignment: Alignment.center,
        child: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children:  <Widget>[
              const Image(image: AssetImage('assets/brand.png'),
                width: 150,
                height: 150,
              ),
             const Image(image: AssetImage('assets/otp.png'),
                  width: 180,
                  height: 180,
             ),
             const SizedBox(height: 25,),
             Container(
               alignment: Alignment.center,
               width: MediaQuery.of(context).size.width*0.6,
               child: const Text('OTP has been sent to your registered mobile number',
               style: TextStyle(fontSize: 17,),
               textAlign: TextAlign.center,
              
               
               ),
             ),
             const SizedBox(height: 20,),
             const Text('Enter OTP ',
             style: TextStyle(fontSize: 17),),
             Container(
               
               padding: const EdgeInsets.only(top:60.0,left: 20.0,right: 20.0,bottom: 20.0),
               margin: const EdgeInsets.only(left: 20.0,right: 20.0),
               decoration: BoxDecoration(
                 borderRadius: BorderRadius.circular(10.0),
                 color: Colors.white,
                 boxShadow:  [
                   BoxShadow(
                     color: Colors.grey.withOpacity(0.5),
                     blurRadius: 5.0,
                     offset: const Offset(0.0,5.0)
                   )
                 ]
               ),
               child: Row(
                 children:const [
                  Expanded(
                    child: OtpInput(first: true, last: false)
                  ),
                  SizedBox(width: 35,),
                  Expanded(
                    child: OtpInput(first: false, last: false)
                  ),
                  SizedBox(width: 35,),
                  Expanded(
                    child: OtpInput(first: false, last: false)
                  ),
                  SizedBox(width: 35,),
                  Expanded(
                    child: OtpInput(first: false, last: true)
                  ),
                
                 ],
               ),
             ),
            const SizedBox(height: 25,),

            ElevatedButton(onPressed: (){
              Navigator.
              pushReplacement(context, MaterialPageRoute(builder: (context)=>const HomePage()));
            },
            
            child: const Padding(
              padding: EdgeInsets.all(10.0),
              child: Text('Confirm OTP',
              style: TextStyle(fontSize: 17),),
            ),
            style:  ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFF2E55FA)),
            shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0))),
            )
            
            ),
            TextButton(onPressed: (){},
            child: const Text('Didn\'t receive OTP? Resend'),
            style:  TextButton.styleFrom(
            textStyle: const TextStyle(color: Color(0xFF2E55FA)),
            
            )
           
            ),
            const SizedBox(height: 90,),
            ],
          
          ),
        ),
      ),
    );
  }
}

class OtpInput extends StatelessWidget {
   const OtpInput({
    Key? key, required this.first, required this.last,
  }) : super(key: key);
  final bool first, last;

  @override
  Widget build(BuildContext context) {
    return  TextField(
     maxLength: 1,
       onChanged: (value) {
         if (value.length == 1 && last==false) {
           FocusScope.of(context).nextFocus();
         }
         if (value.isEmpty && first==false) {
           FocusScope.of(context).previousFocus();
         }
       },
     style: const TextStyle(fontSize: 30),
     textInputAction: TextInputAction.next,     
     textAlign: TextAlign.center,
     keyboardType: TextInputType.number,
     decoration: const InputDecoration(
       counter: Offstage(),
       hintText: '*',
       hintStyle: TextStyle(fontSize: 30,
       color: Colors.black26,
     ),
      focusedBorder: UnderlineInputBorder(
        borderSide: BorderSide(color: Colors.black, width: 2),
      ),
        enabledBorder: null,
        border: null,
      
     ),
            );
  }
}