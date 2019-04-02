<?php

   class Person
   {
       public $pname = "Unknown";
       public $age   = "Unknown";
       public $occupation = "Unknown";

       function getData()
       {
           echo $this->pname . " ";
           echo $this->age . " ";
           echo $this->occupation;
       }

   }  

   $me = new Person();
   $doc = new Person();
   $engineer = new Person();

   $arryPersons = array($me, $doc, $engineer);

   foreach ($arryPersons as $person)
   {
        echo $person->getData() . "\n";
   }   
    
?>