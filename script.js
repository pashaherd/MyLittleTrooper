const search = document.getElementById('search');
const readDiv = Array.from(document.querySelectorAll('.img')); 
console.log(readDiv);  

//Search Bar 
console.log(window.innerWidth); 
search.addEventListener('click', () =>{
   document.querySelector('.search').classList.toggle('toggle'); 
});
// Search Bar Functionality

const input = document.querySelector('[data-input]');
console.log(input);  

input.addEventListener('keyup', (e) =>{
 console.log(e.target.value); 
});
// Menu 

const menu = document.querySelector('#menu');
const x = document.querySelector('#x'); 

menu.addEventListener('click', () =>{
   console.log(1); 
   menu.style.visibility = 'hidden'; 
   x.style.visibility = 'visible'; 

   document.querySelector('.links').classList.toggle('tog',true); 
});

x.addEventListener('click', () =>{
x.style.visibility = 'hidden'; 
menu.style.visibility = 'visible'; 

document.querySelector('.links').classList.toggle('tog',false); 
});

 // Cards
readDiv.forEach((img) => {
   img.addEventListener('mouseover', (e) =>{
      let btns = Array.from(document.querySelectorAll('.btnRead'));   
   switch(e.target.id){
      case 'd1':
        btns[0].style.visibility = 'visible'; 
        btns[0].classList.toggle('active',true);
         break; 
      case 'd2':
         btns[1].style.visibility = 'visible'; 
         btns[1].classList.toggle('active',true);      
      break;
      case 'd3':
         btns[2].style.visibility = 'visible'; 
         btns[2].classList.toggle('active',true); 
   }
   }); 

   img.addEventListener('mouseleave', (e) =>{
      let btns = Array.from(document.querySelectorAll('.btnRead'));   
      
      btns.forEach((b) => {
         b.style.visibility = 'hidden';  
      });
   });         
}); 

//Product Hover 

const pods = Array.from(document.querySelectorAll('.img-p')); 

pods.forEach((pod) =>{
  pod.addEventListener('mouseenter', (e) =>{
     e.target.classList.toggle('reveal',true); 
     e.target.children[0].classList.toggle('reveal',true); 

  }); 
  pod.addEventListener('mouseleave', (e) =>{
     e.target.classList.toggle('reveal', false); 
     e.target.children[0].classList.toggle('reveal',false); 
  });
});

//Related Products

const recommended = document.querySelector('.recommend'); 


let images,links,title,desc; 

images = ['product1.jpg','product2.jpg','product3.jpg','product4.jpg','product5.jpg','product6.jpg','product7.jpg','product8.jpg','product9.jpg']
links = ['https://amzn.to/41Jkm3Y','https://amzn.to/3URcYRO','https://amzn.to/3AeZ0jh'
,'https://amzn.to/43SQCDm','https://amzn.to/41rbccy','https://amzn.to/3owi5uA',
'https://amzn.to/3LhJZU1','https://amzn.to/43Uv3SX','https://amzn.to/3H2982n'];
title = ['Fisher Price Deluxe Seat', '192-Inch Baby Gate', 'Skip Hop 3in1',
'BRICA Booster Seat','C&H Portable Swing','Baby Merlins Magic SleepSuit',
'Regalo Extra Tall Baby Gate','Nuby Floating Purple Octopus','Dream On Me Cradle Mattress'];
desc = ['Fisher-Price Deluxe Sit-Me-UP Floor Seat with Toy Tray Happy Hills',
'Regalo 192-Inch Super Wide Adjustable Baby Gate and Play Yard, 4-In 1, Bonus Kit',
'Skip Hop 3-in-1 Baby Activity Push Walker to Toddler Scooter, Zoo Unicorn', 
'BRICA Travel Booster Seat', 'Comfort & Harmony Portable Swing, Cozy Kingdom', 
'Baby Merlin\'s Magic Sleepsuit- Swaddle Transition Product', 'Regalo Home Accents Extra Tall and Wide Walk Thru Baby Gate, 4-Inch Extention Kit', 
'Nuby Floating Purple Octopus with 3 Hoopla Rings Interactive Bath Toy',
'Dream On Me 2-Inch Foam Cradle Mattress White'];



function productBuilder(){
   let arr = [];

   for(let i = 0; i < images.length; i++){
      let link = document.createElement('a'); 
      link.setAttribute('href',links[i]); 
      link.setAttribute('target','_blank'); 
      link.setAttribute('class','anchor'); 


      let el = document.createElement('div'); 
      el.className = 'pod-r';
      

      let firstChild = document.createElement('div'); 
      firstChild.className = 'img-p'; 
      let secondChild = document.createElement('span'); 
      

      let img1 = document.createElement('img'); 
      img1.setAttribute('src','social.png'); 
      img1.setAttribute('class','link-p'); 
      img1.setAttribute('id', 'i1'); 

      let img2 = document.createElement('img'); 
      img2.setAttribute('src',images[i]); 
      img2.setAttribute('class','p1-p'); 
      

     

      let header = document.createElement('h2'); 
      header.innerText = title[i]; 

      let description = document.createElement('p'); 
      description.innerText = desc[i]; 
     
      secondChild.append(header,description); 
      firstChild.append(img1,img2); 

      el.append(firstChild,secondChild); 

      link.append(el); 

       
      arr.push(link); 
   }
   return arr
}

function select(e){
   let arr = productBuilder();  
   let newArr = [];
   
   for(let i = 0; i < arr.length; i++){
      if(e.className.includes('wholesome')){
          newArr.push(arr[i])
          i += 2; 
      } else if(e.className.includes('safety')){
         if(i < 3){
            i += 1 
         }
         newArr.push(arr[i]); 
         i += 2
      } else{
         if(i <= 3){
           i += 2; 
         }
         newArr.push(arr[i]); 
        i += 2
      } 
   }
   console.log(newArr); 
   return newArr
}

 // Trending Blog Hover 
   
 const blogCover = Array.from(document.querySelectorAll('.content-t'));
 console.log(blogCover); 
 
 blogCover.forEach((blog) =>{
   blog.addEventListener('mouseenter', (e) =>{
    console.log(1); 
     e.target.children[2].classList.toggle('visible', true); 
   }); 
   blog.addEventListener('mouseleave', (e) =>{
    e.target.children[2].classList.toggle('visible', false); 
   });
 });
 

// Loading Stories 

const stories = {
   story1:`As I lay in the hospital bed, holding my newborn baby in my arms, I couldn\'t help but feel overwhelmed with joy and love. Our family had just welcomed our newest addition, and I couldn\'t wait for my husband and other children to meet our precious bundle of joy\.
   I closed my eyes and took a deep breath, trying to soak in every moment of this special day. I thought back to the moment I found out I was pregnant, and how thrilled my husband and I were. We had been trying for a baby for a while, and when we finally got the news, we were over the moon with excitement\n
   Now, as I looked down at my newborn baby, I felt so grateful and blessed. I knew that our family would never be the same again, but in the best possible way.
   Soon, my husband and other children arrived at the hospital to meet their new sibling. They came into the room with big smiles on their faces, and I could tell they were just as excited as I was.
   My oldest daughter, who was eight years old, was the first to approach the bed. She looked at the baby with wonder in her eyes, and I could see the love and protectiveness in her expression. My six-year-old son was next, and he proudly held out his hand for the baby to grab onto.
   And then, my four-year-old daughter came up to the bed, her eyes shining with excitement. "Can I hold the baby, Mommy?" she asked.
   I carefully placed the newborn in her arms, and she looked down at him with a mixture of awe and tenderness. "He's so tiny," she whispered.
   Watching my children welcome their new sibling into the family filled my heart with so much happiness. I knew that there would be challenges ahead, but in that moment, I felt like we could conquer anything as long as we had each other.
   As I looked around the hospital room, at my husband and children all gathered together, I knew that our family was complete. We had a new member to love and cherish, and I couldn't wait to see what adventures awaited us in the future.
   `,
   story2:`I sat on the living room floor with my one-year-old son, watching him take tentative steps towards me. His chubby little legs wobbled as he moved, his arms outstretched for balance.
   "Come on, you can do it!" I encouraged him, holding out my arms for him to come to me.
   He took another step, then another, his face beaming with excitement and determination. And then, with a little stumble, he fell into my arms, giggling with delight.
   I couldn't help but laugh along with him, feeling a sense of pure joy and love in that moment. Watching my son learn to walk was one of the most precious experiences of my life, and I was so grateful to be able to witness it.
   As he stood up again, I could see the look of concentration on his face as he took another step. This time, he made it a few more before toppling over, but he got right back up again.
   "You're doing so great!" I cheered, clapping my hands together.
   We continued like this for a little while longer, my son taking more and more steps with each try. It was amazing to see how quickly he was learning and growing, and I felt so proud of him.
   Eventually, he got tired and plopped down onto the floor, his little legs splayed out in front of him. I scooped him up into my arms, kissing his chubby cheeks.
   "You're my little champion," I told him, nuzzling my nose against his.
   As we sat there together, my heart filled with gratitude for this precious moment with my son. I knew that there would be many more milestones to come, but in that moment, I was content just to be with him and to witness the joy of his first steps.
   `,
   story3:`As I watched my little one play on the floor, taking his first wobbly steps towards me, my heart swelled with pride and love. It seemed like just yesterday that he was born, tiny and fragile, and now here he was, beginning to explore the world around him.
   I crouched down beside him, holding out my arms, and watched as his face lit up with joy. He grasped my fingers tightly, using them as a guide as he took a few more steps towards me.  
   Together, we laughed and played, his little hands clasping mine as we moved around the room. I marveled at his determination and persistence, even when he stumbled and fell  
   In that moment, I felt a mix of emotions - happiness at his progress, sadness at how quickly he was growing up, and a deep sense of love and connection that transcended words. I knew that this was just the beginning of many more milestones to come, but for now, all that mattered was this precious moment, this precious bond between mother and child.
   As we continued to play, I made a silent promise to cherish every moment, to hold onto these memories of my little one taking his first steps towards independence, and to love him with all my heart, for all time. For in that moment, I realized that being a mother was not just about nurturing and caring for my child, but also about learning and growing alongside him, and experiencing the joys of life through his eyes.`,

   story4:`Feeding your baby a healthy and balanced diet is crucial for their growth and development. Here are some general guidelines for baby food and nutrition:
   Breast milk or formula should be the main source of nutrition for your baby until they are around six months old. After that, you can start introducing solid foods, while still offering breast milk or formula. 
   Introduce new foods gradually, one at a time, and wait a few days before introducing another new food. This will help you identify any potential allergies or intolerances.
   Start with simple, single-ingredient foods, such as mashed bananas, sweet potatoes, or avocado. As your baby gets used to eating solid foods, you can start offering more complex foods and mixtures.
   Offer a variety of foods to ensure that your baby gets all the necessary nutrients. This includes foods from all food groups, such as fruits, vegetables, grains, proteins, and dairy.
   Avoid offering foods that are high in sugar, salt, or fat, as well as foods that are choking hazards, such as popcorn, nuts, and hard candies.
   Be patient and persistent. It may take your baby several tries to get used to a new food, so keep offering it in small amounts and in different ways (pureed, mashed, etc.).
   If you have any concerns or questions about your baby's nutrition, it's always a good idea to consult with your pediatrician or a registered dietitian. They can provide personalized advice based on your baby's individual needs and development.`,

   story5:`I thought I had everything under control. As a seasoned mother of two, I thought I had toddler safety down to a science. But one day, everything changed.
   It was a beautiful summer afternoon, and I had taken my two children to the park. My youngest, a curious and energetic toddler, was happily playing on the swings while my older child was off exploring with some friends.
   As I sat on a nearby bench, watching my toddler play, I noticed a group of children playing a game of tag nearby. I didn't think much of it, until suddenly one of the children accidentally bumped into my toddler, causing him to lose his balance and fall from the swing.
   In that split second, everything seemed to happen in slow motion. I rushed over to my toddler, who was crying and holding his arm. It was clear that he was hurt, and my heart sank as I realized that I had let my guard down.
   I rushed my little one to the hospital, where we discovered that he had broken his arm. As I sat there in the waiting room, watching my toddler being treated by the doctors, I felt a deep sense of guilt and regret. How could I have let this happen?
   But as the hours went by and my toddler began to recover, I realized that this experience had taught me a valuable lesson. I had been so confident in my ability to keep my children safe that I had forgotten the importance of staying vigilant and aware at all times.
   From that day forward, I made a promise to myself to never let my guard down when it came to my children's safety. I read up on the latest safety tips, talked to other parents about their experiences, and made sure to always keep a watchful eye on my children.
   And as my toddler healed and went back to his usual happy and active self, I knew that I had learned an important lesson - one that would stay with me for the rest of my life. For being a mother is not just about nurturing and caring for your children, but also about constantly learning and growing, and never taking their safety for granted.`, 

   story6:`As a mother, finding the right babysitter for my children was always a top priority. I wanted someone who I could trust to care for my children as if they were their own. After all, leaving your children with someone you barely know can be nerve-wracking.
   To begin my search, I asked friends and family members for recommendations. I wanted someone who had a good reputation, so word-of-mouth referrals were a great place to start. After compiling a list of potential candidates, I began my screening process.
   The first thing I looked for was a babysitter who was responsible and reliable. I wanted someone who would show up on time, follow my instructions, and stay with my children until I returned. I also looked for someone who had experience with children similar in age to mine. This gave me confidence that the babysitter could handle any challenges that might arise.
   Another important quality was patience and kindness. I wanted someone who would be patient with my children and handle any issues calmly and kindly. It was essential that the babysitter be nurturing and caring so that my children would feel comfortable in their presence.
   Communication was also critical. I needed a babysitter who could listen carefully to my instructions and communicate with my children effectively. I wanted someone who could answer my children's questions and address their concerns while keeping me informed about how things were going.
   Finally, I wanted a babysitter who would engage my children in fun activities. I looked for someone who was creative and had lots of ideas for games and crafts. I knew that my children would have a more positive experience with a babysitter who could make their time together fun and enjoyable.
   In the end, I found the perfect babysitter for my children. She was reliable, experienced, patient, communicative, and fun. She quickly built a bond with my children, and they looked forward to spending time with her. Knowing that my children were in good hands allowed me to relax and enjoy my time away from home.`,

   story7:`one of the most common questions I get asked by new parents is how to help their baby sleep. Fortunately, there are a few hacks that can make a big difference.

   Establish a consistent bedtime routine: Babies thrive on routine, so create a predictable sequence of activities that signal to your baby that it's time for bed. This can include a warm bath, a story or song, and a gentle massage.
   
   Use white noise: White noise machines, fans, or apps can create a soothing background noise that can help your baby sleep more soundly. This is because babies are used to hearing the constant sounds of the womb, and replicating this environment can help them feel more relaxed.
   
   Avoid over-stimulating activities before bedtime: Bright lights, loud noises, and vigorous play can all make it harder for your baby to settle down. Instead, opt for quiet activities like reading, snuggling, or singing.
   
   Ensure your baby is well-fed and comfortable: A hungry or uncomfortable baby will have a hard time falling asleep, so make sure your baby's basic needs are met before putting them down to sleep. A full tummy, a clean diaper, and comfortable clothing can all make a big difference.
   
   Practice safe sleep habits: To reduce the risk of Sudden Infant Death Syndrome (SIDS), always place your baby on their back to sleep, use a firm sleep surface, and keep soft objects and loose bedding out of the crib.
   
   Be patient and persistent: Getting your baby to sleep through the night can take time, so don't give up if you don't see results right away. Stick with your routine and be consistent, and before long, you'll both be enjoying restful nights and happy days.
   
   Remember, every baby is different, so what works for one may not work for another. Don't be afraid to experiment and find what works best for your family. With a little patience and persistence, you can help your baby establish healthy sleep habits that will benefit them for years to come.`
}
function splitBlog(e){
   return stories[e].indexOf('.',200); 
}
const blogLinks = Array.from(document.querySelectorAll('.blog')); 
console.log(blogLinks); 
blogLinks.forEach((blog) =>{
  blog.addEventListener('click', (e) =>{
   console.log(blog.id); 
     localStorage.setItem('id',blog.id); 
  }); 
});

let storageId = localStorage.getItem('id');

function blogBuilder(title,author,occ,p1,p2,pp,bg,caption){

   document.querySelector('.blog-content h1').innerHTML = title; 
      document.getElementById('author-text').innerHTML = author; 
      document.getElementById('occupation').innerHTML = occ
      document.querySelector('#part1').innerHTML = p1; 
      document.querySelector('#part2').innerHTML = p2;
      document.querySelector('#author').style.background = pp; 
      document.querySelector('.inter > div').style.background = bg; 
      document.querySelector('.inter p').innerHTML = caption;

      // Other Styling 
     document.querySelector('.inter > div').style.backgroundPosition = 'center'; 
     document.querySelector('.inter > div').style.backgroundSize = 'cover'; 
     document.querySelector('#author').style.backgroundPosition = 'center'; 
     document.querySelector('#author').style.backgroundSize = 'cover'; 
}
// Fetch Foreign HTML Elements
document.addEventListener('DOMContentLoaded', () =>{
Promise.all([
   fetch('index.html').then(response => response.text()),
   fetch('trending.html').then(response => response.text())
]).then(results =>{
   const parser = new DOMParser(); 
   const doc1 = parser.parseFromString(results[0],'text/html');
   const doc2 = parser.parseFromString(results[1], 'text/html'); 

   const link1 = doc1.getElementById(storageId);
   const link2 = doc2.getElementById(storageId); 
   
   let links = [link1,link2]; 
   for(let i = 0; i < links.length; i++){
      if(links[i] === null){
         links.splice(i,1); 
      }
   }
 
   // Replace Dummy Products 

try{
   console.log(recommended.children[0]); 
   const products = Array.from(document.querySelector('.recommend').children); 
   console.log(products); 
      let replacement = select(links[0]); 
      console.log(replacement); 
      products.forEach((prod, i) =>{
          document.querySelector('.recommend').replaceChild(replacement[i],prod); 
      });
   } catch(error){
      console.log(error); 
   } finally {
    console.log('finished'); 
   }   
 })
console.log(storageId);   


try{
switch(storageId){
   case 'b1':
     blogBuilder(
      'Mia & Sade',
      'Mia Lemma',
      'Proud Mother',
      stories.story1.slice(0,splitBlog('story1')),
      stories.story1.slice(splitBlog('story1')),
      'url(miahs.jpg)',
      'url(family1.jpg)',
      'mia & sade sharing their first moment outside'
     )
   break; 
   case 'b2':
      blogBuilder(
         'Chris\'s Moment',
         'Oliva & Adlyn Novak',
         'Strong Family Unit',
         stories.story2.slice(0,splitBlog('story2')), 
         stories.story2.slice(splitBlog('story2')),
         'url(family2.jpg)',
         'url(family2.jpg)',
         'baby chris & the family'
      );
      break; 
   case 'b3':
      blogBuilder(
         'Stephs First Step',
         'Marissa Clark', 
         'Proud Mother',
         stories.story3.slice(0, splitBlog('story3')), 
         stories.story3.slice(splitBlog('story3')), 
         'url(marissa.jpg)',
         'url(family3.jpg)',
         'steph\'s standing tall'
      )
      break; 
   case 'b4':
      blogBuilder(
         'What Builds Baby Bones',
         'Dr Allis Coplean',
         'Pediatrician', 
         stories.story4.slice(0,splitBlog('story4')),
         stories.story4.slice(splitBlog('story4')),
         'url(allis.jpg)',
         'url(alliscover.jpg)',
         'allis performing an auscultation'
      )
      break; 
   case 'b5':
      blogBuilder(
         'Mia\'s Lesson',
         'Mia Lemma',
         'Proud Mother',
         stories.story5.slice(0, splitBlog('story5')), 
         stories.story5.slice(splitBlog('story5')), 
         'url(miahs.jpg)',
         'url(miahscover-l.jpg)',
         'mother playing with her baby'
      )
      break; 
   case 'b6':
      blogBuilder(
         'The Right Babysitter', 
         'Carol Garcia',
         'Experienced Babysitter',
         stories.story6.slice(0,splitBlog('story6')),
         stories.story6.slice(splitBlog('story6')), 
         'url(carol.jpg)',
         'url(carolcover.jpg)',
         'carol on the job'
      )
      break; 
   case 'b7':
      blogBuilder(
         'The Hacks of Baby Sleep',
         'Dr Samuel Weizman',
         'Pediatrician',
         stories.story7.slice(0,splitBlog('story7')), 
         stories.story7.slice(splitBlog('story7')),
         'url(samuel.jpg)',
         'url(samuelcover.jpg)',
         'assistant following up with patients'
      )
      break; 
 }
} catch(error){
   console.log(error); 
}
});
console.log(1); 


   