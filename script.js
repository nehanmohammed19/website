 // Fade-in Effect for Sections
 const sections = document.querySelectorAll('section');

 const observer = new IntersectionObserver(
     (entries) => {
         entries.forEach((entry) => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('visible');
             }
         });
     },
     { threshold: 0.1 }
 );

 sections.forEach((section) => {
     observer.observe(section);
 });

 // Modal Logic
 const modal = document.getElementById('project-modal');
 const modalTitle = document.getElementById('modal-title');
 const modalDescription = document.getElementById('modal-description');
 const modalImages = document.createElement('div');
 modalImages.id = 'modal-images';

 modal.appendChild(modalImages); // Add the images container to the modal dynamically

 function openModal(projectId) {
     modal.style.display = 'flex';
     modal.style.width = '100%'; // Make the modal cover the entire width
     modal.style.height = '100%'; // Make the modal cover the entire height
     modal.style.overflow = 'auto'; // Enable scrolling if content overflows

     // Clear existing content in the modal images container
     modalImages.innerHTML = '';

     if (projectId === 'project1') {
 modalTitle.textContent = '1P13 Project 1 - International Airport Challenge';
 modalDescription.innerHTML = `
     <div class="intro-container">
         <!-- Text on the left -->
         <div class="intro-text">
             <h3>Introduction</h3>
             <p>
                 <strong>Synopsis:</strong> This project focuses on solving luggage handling inefficiencies in airports by designing and 
                 automating a luggage transportation system. The system uses a rotary actuator-driven platform to transfer 
                 luggage between a higher platform and a lower platform. The solution integrates mechanical and software 
                 components to scan barcodes, verify weight constraints, and sort luggage accordingly. The project aimed to improve
                 efficiency, reduce errors, and create a design for future airport applications. Included with this, our team was tasked
                 with creating a python program to take in passenger and fleet data and manipulate it to display required information. 
             </p>

             <p>
                 <strong>Assigned Constraints, Materials, and Mechanism:</strong> Our team was tasked with ensuring the system could handle luggage 
                 up to 5 kg, fit within specific size constraints, and function seamlessly under predefined weight and motion limitations. A rotary 
                 actuator was chosen as the core mechanism due to its precision and efficiency. 
             </p>
         </div>

         <div class="intro-image-container">
             <div>
             <img class="intro-image" src="project1/introimage.jpg" alt="Intro Image">
             </div>
             <div class="image-caption9">
             <p>
                 Final design of the luggage transportation system using a rotary actuator to transfer
                 luggage between platforms efficiently.
             </p>
             </div>
         </div>
     </div>

     
     <div class="software-container">
         <img class="software-image" src="project1/softwareimage.png" alt="Software Image">
         <p>Python program output displaying passenger and fleet data, including oversold seats and overweight baggage.</p>
     </div>

     
     <div class="description1">
        <div class="grid-container">
             <div class="project-obj">
                 <div class="project-objectives-title">
                     <h3>Project Objectives</h3>
                 </div>
                 <div class="timeline-container">
                     <div class="timeline">
                         <div class="timeline-step">
                             <div class="step-number">1</div>
                             <p>Identified objectives, functions, and constraints for computer program design and for the design of the luggage transport system.</p>
                         </div>
                         <div class="timeline-step">
                             <div class="step-number">2</div>
                             <p>
                                 Developed and visualized the workflow for both the physical model and the 
                                 software program by first creating detailed concept sketches using morph charts, which were then refined into
                                 a comprehensive CAD model using Autodesk Inventor, alongside flowcharts to outline
                                 the software's logical processes.
                             </p>
                         </div>
                         <div class="timeline-step">
                             <div class="step-number">3</div>
                            <p>
                                 Using the CAD model developed in Autodesk Inventor, 3D-printed multiple design iterations for the 
                                 physical model, and created software for the Q-Arm to accurately pick up and drop off luggage at 
                                 the designated locations.
                             </p>
                         </div>
                         <div class="timeline-step">
                             <div class="step-number">4</div>
                             <p> 
                                 Tested the CAD model to ensure it met the defined objectives and constraints, and refined the 
                                 software by editing the code to include precise coordinates for the pickup location, platform, 
                                 and rejection bin. Additionally, enhanced the Python graphics code using Turtle Graphics for 
                                 improved visualization.
                             </p>
                         </div>
                         <div class="timeline-step">
                             <div class="step-number">5</div>
                             <p> Presented findings to instructional team with working mechanism and software.</p>
                         </div>
                     </div>
                 </div>
             </div>
           <div class="responsibility-t">
                 <h3 class="subheading" > Project Responsibilities</h3>
                 <p>
                     For this project, I served as the <strong>Coordinator</strong>, taking on the primary responsibility of contributing to
                     team documentation and ensuring all project-related materials were organized and up-to-date. I was also
                     tasked with creating detailed meeting notes whenever the group convened to discuss progress, challenges,
                     or advancements in the project, ensuring clear communication and alignment among team members.
                 </p>
                 <div class="image-caption1">
                     <img class="meeting-log" src="project1/meeting-log.png" alt="Meeting Log Example">
                     <p>Example of Meeting Minutes for Project 1:</p>
                 </div>
                 <p> 
                     Here is a link to the complete meeting notes document: 
                 </p>
                 <a href="project1/meetingMinutes.pdf" download>  
                 <img src="project1/download-img.png" style="width:20px; vertical-align:middle;"> 
                 Download meeting-minutes
                 </a>
                 <p>
                     
                     In addition to contributing to the design of the CAD model and collaborating on ideas within the 
                     group, my primary contribution was focused on the software development for the project. I 
                     dedicated significant time to fine-tuning the coordinates and arm adjustments required for the
                     Q-Arm to efficiently pick up and drop off luggage at the designated locations. Furthermore, I 
                     ensured that all provided data files were correctly read and processed, meticulously verifying
                     that each group function performed as intended, ensuring seamless integration and overall 
                     functionality of the system.
             </div>
         </div>

         <div class=design-process-box>
                 <h3 class="subheading">Design Process</h3>
                 <div>
                     <p> 
                         Our design process began with creating a detailed list of functions, objectives, and constraints. 
                         Building on this foundation, I developed a morph table inspired by Dr. Fleming's lectures. This method
                         proved highly effective for brainstorming and generating sketches, allowing us to clearly visualize 
                         how our mechanism would operate. During the process, I often questioned whether the selected means
                         chosen as a group were the best options or if alternatives were overlooked. For instance, would 
                         a more complex mechanism lead to better functionality, or would it add unnecessary complications? 
                         These discussions we had as a group solidified our understanding of the design but also helped ensure 
                         we create a efficient design for this problem.
                     </p>
                 </div>
             <div class="grid-container2">
                     <!-- Image 1 (top-left) -->
                     <div id="img1" class="grid-item1">
                         <img
                         class="design-process"
                         src="project1/functions-objectives-constraints.png"
                         alt="Functions, Objectives, and Constraints Brainstorm"
                         />
                         <p>Table summarizing the project's core functions, objectives, and constraints, detailing the 
                             model's  focus on luggage identification, secure transport, user-friendly operation, and 
                             adherence with physical and operational limitations of the scenario given.
                         </p>
                     </div>
             
                     <div class="arrow arrow-right"></div>

                     <div id="img2" class="grid-item">
                         <img
                         class="design-process"
                         src="project1/morph-table.png"
                         alt="Morph Table"
                         />
                         <p> 
                             Given here is a morph table, a crucial tool used in out design process. It was used to explore multiple 
                             design options for specific functions by listing possible solutions (means) and selecting the best ones
                             based on project objectives and constraints. This table was created by me and then discussed with the 
                             group to finalize our design. The Sliding Inner Platform was selected for seamless luggage transfer, 
                             as it uses gravity to extend and retract. These choices highlight 
                             the practicality and effectiveness of the morph table in narrowing down design solutions.
                         </p>
                     </div>

                     <!-- Arrow Down (below Image 2, above Image 3) -->
                     <div class="arrow arrow-down"></div>

                     <!-- Image 3 (bottom-right) -->
                     <div id="img3" class="grid-item">
                         <img
                         class="design-process"
                         src="project1/sketch1.png"
                         alt="First Sketch"
                         />
                         <p>
                             From our chosen means, our team developed a detailed sketch to visualize how the design 
                             would look before creating the CAD model in Autodesk Inventor. The sketch included descriptions
                             of key mechanisms, to ensure the design was clear and understandable to all team members. 
                             This step helped align the team on the overall concept and provided a solid foundation for translating 
                             the design into a functional CAD model.
                         </p>
                     </div>

                 
                     <div class="arrow arrow-left"></div>

             
                     <div id="img4" class="grid-item">
                         <img
                         class="design-process"
                         src="project1/printedmodel.png"
                         alt="Printed Model"
                         />
                         <p>
                         Using the initial sketch and undergoing multiple refinements, our team frequently revisited 
                         the morph table to create additional sketches and re-evaluated the objectives to ensure the 
                         chosen means aligned with the project goals. After iterative improvements and discussions, the 
                         group finalized a design that utilized a rotary actuator to lower and raise a bridge for transferring 
                         luggage. This design built upon the individual CAD models contributed by team members, combining 
                         the best features into a functional final model.

                             
                         </p>
                     </div>
             </div>
         </div>
         <div class= "flowchart-info">
             <div>
             <h3 class="subheading">Flowchart, Pseudocode, and CAD Model</h3>
             <p>
             The project featured a software component where we were tasked with interpreting large data files
                 containing fleet and passenger information. Our goal was to develop individual functions that processed 
                 this data and displayed it in a clear, table-like format. I played a significant role in this part of the
                 project, leveraging and refining my Python skills in parsing file data, manipulating datasets, and presenting
                 useful information visually using Turtle Graphics.
             </p>
             <p>

                 To approach this challenge effectively, I began by creating detailed flowcharts for each function. These flowcharts, 
                 along with well-structured pseudocode, laid the groundwork for the Python implementation. This 
                 approach made coding the functions straightforward, as the problem-solving and planning phases were
                 already completed. During this step, I considered questions such as 'is there an easier way to structure this function?'
                 or 'How can I reduce redundant operations?' An example is that initially in the flowchart, I was going through each 
                 list individually to output in turtle graphics. However,  I noticed all the lists were of the same size, meaning I 
                 needed to use only one list's length to iterate through them all, which made the code look more professional and executed 
                 faster.
             </p>
             </div>
             <div class="scrollable-container">
                 <img src="project1/graphics-flowchart.png">
                 <img src="project1/overweight-flowchart.png">
             </div>
             <div>
                 <div>
                     <p>
                     Throughout our project, even after creating and refining sketches, 
                     the CAD models were not perfected on the first try. The process 
                     involved multiple iterations and revisions to address various 
                     challenges. I learned that CAD models provide a much clearer 
                     representation of the actual project, revealing potential issues 
                     that might not be evident in sketches. For instance, concerns like, 
                     "This won't fit, in the sliding mechanism" or "This doesn't align with 
                     our constraints and objectives, as it won't reach the second platform" 
                     frequently came up and were actively discussed with my group members. 
                     These collaborative discussions helped us identify and resolve design 
                     flaws, ensuring the final CAD model was both functional and aligned 
                     with the project's goals.
                     </p>
                 </div>

                 <!-- Images, arrows, and captions -->
                 <div class="image-row">
                     <!-- Image 1 + caption -->
                     <div class="process-step2">
                         <img class="design-process3" src="project1/cad1.jpg" alt="CAD Model 1" />
                         <p> 
                             This was the first CAD model our group collectively agreed upon. After spending time
                             3D printing the design, we discovered that the rigid rod connected to the rotary actuator 
                             lacked the necessary flexibility, preventing it from functioning as intended. This 
                             unexpected limitation forced us to discard the idea and return to the morph table to reevaluate 
                             our approach and explore alternative solutions. 
                         </p>
                     </div>

                     <!-- Arrow in between (pointing right) -->
                     <div class="arrow arrow-right"></div>

                     <!-- Image 2 + caption -->
                     <div class="process-step2">
                         <img class="design-process3" src="project1/cad2.jpg" alt="CAD Model 2" />
                         <p>
                             After many iterations, we finalized this design and 3D printed it as well. The rotary actuator 
                             and the string mechanism we purchased worked effectively to lower the bridge. However, raising 
                             the bridge only succeeded 50% of the time, forcing us to refine the CAD model to allow the 
                             sliding mechanism to move more freely. Additionally, we discovered that the luggage provided 
                             did not fit within the allocated space for entry from platform A. To resolve this, we adjusted 
                             the design by raising the rotary actuator, which became a key improvement in our final iteration.
                         </p>
                     </div>

                     <!-- Arrow in between (pointing right) -->
                     <div class="arrow arrow-right"></div>

                     <!-- Image 3 + caption -->
                     <div class="process-step2">
                     <img class="design-process3" src="project1/cad3.jpg" alt="CAD Model 3" />
                         <p>
                             In our final iteration, we addressed all the remaining challenges identified in previous designs. 
                             The sliding mechanism was refined further to ensure smooth and unrestricted movement, and the rotary 
                             actuator was elevated to provide clearance for the luggage to enter  from Platform A. This iteration 
                             incorporated all the adjustments required to meet the project objectives and constraints, resulting
                             in a fully functional design that successfully transported luggage as intended.
                         </p>
                     </div>
                 </div>
             </div>

         </div>
         <div class="final-program">
             <h3 class="subheading">Final Program</h3>
             <div class="text-image-container4">
                 <!-- TEXT on the LEFT -->
                 <div class="text-content2">
                     <p>
                     This project featured two final programs. The first, developed for the Quanser arm on a Raspberry Pi,
                     enabled the system to pick up and drop off luggage using our 3D-printed model. I calibrated the precise
                     coordinates for pickup, rejection, and platform areas, which required fine-tuning. To control the platform,
                     to address issues where the platform would not slide back down, I programmed the rotary actuator to spin
                     clockwise and counterclockwise, introducing a "jerking" motion with small time intervals to ensure the
                     platform slid back into its resting position smoothly.
                     </p>
                     <p>
                         <strong> Relfection </strong>
                     <p/>
                     <p>
                         Working on the hardware code for the Quanser arm was especially rewarding, as it brought my coding 
                         to life through real-world interactions. This hands-on experience reinforced my passion for
                         engineering, challenged me to think critically about hardware-software integration. The hardware program allowed me to see the direct impact of my efforts,
                         which made this an unforgettable part of the project.
                     </p>
                 </div>

                 <!-- IMAGE + CAPTION on the RIGHT -->
                 <div class="image-content2">
                     <div>
                     <img src="project1/code-sni.png" alt="Code Snippet">
                     </div>
                     <div class="image-caption5">
                     <p>
                         Utilized time, Quanser arm, and rotary actuator libraries, which enabled the arm to drop luggage 
                         onto the mechanism for transport from Platform A to B, with a jittering motion programmed to 
                         return the platform to its resting position smoothly after each operation.
                     </p>
                     </div>
                 </div>
                 </div>
           <div class="container-example">
                 <!-- 1. Text at the top -->
                 <div class="text-content3">
                     <p>
                     The second program focused on processing the large data files provided to us,
                     which contained detailed fleet and passenger information. This program parsed
                     the data, performed calculations, and presented results in table format. 
                     I created functions <em>passenger_data</em>, <em>fleet_data</em>, 
                     <em>overweight</em>, and <em>graphics_28</em>.
                     </p>
                 </div>

                 <!-- 2. Images side by side + single caption -->
                 <div class="images-and-caption">
                     <div class="imagesrow">
                     <img src="project1/passengerdata-code.png" alt="Passenger Data Code">
                     <img src="project1/fleetdata-code.png" alt="Fleet Data Code">
                     <img src="project1/overweight-code.png" alt="Overweight Code">
                     </div>
                     <div class="image-caption5">
                     <p> 
                         Code snippets showcasing the development of the second program, which processed fleet and
                          passenger data files. Functions such as passenger_data, fleet_data, and overweight parsed
                         the data, identified key details, and calculated results 
                     </p>
                     </div>
                 </div>
                <div class="download-items">
                     <div class="download-section">
                         <p>
                             Download the Python code for processing passenger and fleet data here:
                         </p>
                         <a href=project1/Mon28_software.py" download>
                             <img src="project1/download-img.png" alt="Download Icon" class="download-icon">
                             download software file (.py)
                         </a>
                     </div>
                     <div class="download-section">
                         <p>
                             Download the Python code for controlling Quanser arm and rotary actuator:
                         </p>
                         <a href="project1/Mon28_hardware.py" download>
                             <img src="project1/download-img.png" alt="Download Icon" class="download-icon">
                             download hardware file (.py)
                         </a>
                     </div>
                 </div>


             </div>
         </div>

         <div class= "reflection">
             <h3 class="subheading">Reflection</h3>
             <p>
                This project pushed me out of my comfort zone and challenged me to think critically about
                 both the creative design process and the integration of hardware and software.  As a team,
                  we were optimistic at the start, thinking our first CAD model would work perfectly. However,
                 this was our first time creating CAD models, and we quickly realized that translating an 
                 idea into a functional design is far more complex it looks like. Our initial model, which
                 we were very confident about, failed during testing due to the rigidity of the rotary 
                 actuator connection, forcing us to go back to the drawing board and refine our design.
                 I learned about being patient and flexible in the testing and refining phase of our 
                 design project.  
             </p>
             <p>
                 When it came to the hardware integration and coding, I found the process rewarding yet
                 filled with challenges. One of the biggest hurdles was calibrating the rotary actuator
                 and fine-tuning the platform's motion to specific coordinates, particularly in getting
                 it to slide back to its resting position. Although I implemented a jittering motion
                 to address this, I couldn't help but question the scalability of our design. If this
                 were taken to the real world and scaled up for actual luggage sizes, I don't
                 believe the sliding mechanism would function as intended due to the physics
                 of larger, heavier models and the effects of gravity. This realization highlighted 
                 the importance of considering real-world constraints early in the design process.
                 Despite these challenges, seeing the system come to life and operate on this smaller 
                 scale was incredibly fulfilling. This project not only helped me develop technical 
                 skills but also taught me to think critically about scalability, functionality, and the 
                 real-world applications of my work that I will use in future projects. 
             </p>

         </div>
     </div>

 `;
     } else if (projectId === 'project2') {
         modalTitle.textContent = 'Project 2';
         modalDescription.innerHTML = 'Details about Project 2.';

         // Add images dynamically for Project 2
         modalImages.innerHTML = `
             <img src="project2-diagram.png" alt="Project 2 Diagram" style="width: 100%; margin-bottom: 1rem;">
         `;
     } else if (projectId === 'project3') {
         modalTitle.textContent = 'Project 3';
         modalDescription.innerHTML = 'Details about Project 3.';

         // Add images dynamically for Project 3
         modalImages.innerHTML = `
             <img src="project3-diagram.png" alt="Project 3 Diagram" style="width: 100%; margin-bottom: 1rem;">
         `;
     }
 }

 function closeModal() {
     modal.style.display = 'none';
 }