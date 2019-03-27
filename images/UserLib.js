$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<footer class="footer" data-pg-collapsed> \
    <div class="container"> \
        <div class="row"> \
            <div class="container"> \
                <div class="footer-top"> \
                    <div class="col-md-4"> \
                        <!-- footer About section\
                            ========================== -->                         \
                        <div class="footer-about"> \
                            <h3 class="footer-title" style="color: #E48927;">About</h3> \
                            <ul> \
                                <li> \
                                    <a href="index.html" class="footermenus">Home</a> \
                                </li>                                 \
                                <li> \
                                    <a href="services.html">Services</a> \
                                </li>                                 \
                                <li> \
                                    <a href="portfolio.html">Portfolio</a> \
                                </li>                                 \
                                <li> \
                                    <a href="#">Our Team</a> \
                                </li>                                 \
                                <li> \
                                    <a href="contact.html" class="footercontact">Contact</a> \
                                </li>                                 \
                            </ul>                             \
                        </div>                         \
                    </div>                     \
                    <div class="col-md-4"> \
                        <!-- footer Address section\
                            ========================== -->                         \
                        <div class="footer-address"> \
                            <h3 class="footer-title" style="color: #E48927;">Address</h3> \
                            <p class="contact-address" style="color: #ffffff;"> \
                                    Write us : <a href="mailto:info@info.com" style="color: #e48927;">connect@city78.org</a> </p> \
                            <p style="color: #ffffff;">1440 G St NW, Washington&nbsp; 20005</p> \
                        </div>                         \
                    </div>                     \
                    <div class="col-md-4"> \
                        <!-- footer Media link section\
                            ========================== -->                         \
                        <div class="footer-social-media"> \
                            <h3 class="footer-title" style="color: #E48927;">Keep in touch</h3> \
                            <ul class="footer-media-link"> \
                                <li> \
                                    <a href="https://www.linkedin.com/company/city78/"><i class="fab fa-linkedin" aria-hidden="true"></i></a> \
                                </li>                                 \
                                <li> \
                                    <a href="https://twitter.com/City78tweets"><i class="fab fa-twitter" aria-hidden="true"></i></a> \
                                </li>                                 \
                                <li> \
                                    <a href="https://www.instagram.com/city.78"><i class="fab fa-instagram"></i></a> \
                                </li>                                 \
                                <li> \
                                    <a href="https://medium.com/city78"><i class="fab fa-medium" aria-hidden="true"></i></a> \
                                </li>                                 \
                            </ul>                             \
                        </div>                         \
                    </div>                     \
                </div>                 \
                <div class="footer-nav text-center"> \
                    <div class="col-md-12"> \
</div>                     \
                </div>                 \
                <div class="text-center"> \
                    <div class="col-md-12"> \
                        <div class="copyright"> \
                            <p style="color: #a6a6a6;">©City78 LLC 2019 All rights reserved. <br></p> \
                        </div>                         \
                    </div>                     \
                </div>                 \
            </div>             \
        </div>         \
    </div>     \
</footer>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});