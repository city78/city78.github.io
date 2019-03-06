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
        comp_comp1.code = '<section class="clients-logo">\
    <div class="section">\
        <div class="container">\
            <div class="row">\
                <div class="col-md-12">\
                    <div class="flex">\
                        <div class="col-md-4 client-logo text-center">\
                            <img src="img/client-logo-img-1.png" alt="Client Logo">\
                        </div>\
                        <div class="col-md-4 client-logo text-center">\
                            <img src="img/client-logo-img-2.png" alt="Client Logo">\
                        </div>\
                        <div class="col-md-4 client-logo text-center">\
                            <img src="img/client-logo-img-3.png" alt="Client Logo">\
                        </div>\
                    </div>\
                    <div class="flex">\
                        <div class="col-md-4 client-logo text-center">\
                            <img src="img/client-logo-img-4.png" alt="Client Logo">\
                        </div>\
                        <div class="col-md-4 client-logo text-center">\
                            <img src="img/client-logo-img-5.png" alt="Client Logo">\
                        </div>\
                        <div class="col-md-4 client-logo text-center">\
                            <img src="img/client-logo-img-6.png" alt="Client Logo">\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- /.End row -->\
        </div>\
    </div>\
</section>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / Div');
        comp_comp2.code = '<section class="clients" data-parallax="scroll" data-image-src="img/home/clients-logo-bg-2.jpg">\
    <div class="section">\
        <div class="container-fluid">\
            <div class="row">\
                <div class="col-md-12">\
                    <div class="title text-center">\
                        <h2>Clients Opinion</h2>\
                    </div>\
                    <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 padding-0 slider-main">\
                        <div id="th-slider" class="th-sldier">\
                            <div class="item">\
                                <!-- "We are add Owl Carousel Slider And Added\
                Some Custome Class to Use Our Style" Easy to suse -->\
                                <!-- Slider item -->\
                                <!-- <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 padding-0"> -->\
                                <div class="clients-area">\
                                    <!-- <div class="round-shape"></div> -->\
                                    <div class="clients-description">\
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\
                                        <img src="img/clients-img1.png" alt="Clients">\
                                        <div class=" th-media-body">\
                                            <h3 class="th-media-heading">Paul Lapkin</h3>\
                                            <h4 class="th-media-subheading">CEO at DeviserWeb</h4>\
                                        </div>\
                                    </div>\
                                </div>\
                                <!-- </div> -->\
                                <!-- End Slider item -->\
                            </div>\
                            <div class="item">\
                                <!-- Slider item -->\
                                <!-- <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 padding-0"> -->\
                                <div class="clients-area">\
                                    <!-- <div class="round-shape"></div> -->\
                                    <div class="clients-description">\
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\
                                        <img src="img/clients-img1.png" alt="Clients">\
                                        <div class=" th-media-body">\
                                            <h3 class="th-media-heading">Paul Lapkin</h3>\
                                            <h4 class="th-media-subheading">CEO at DeviserWeb</h4>\
                                        </div>\
                                    </div>\
                                </div>\
                                <!-- </div> -->\
                                <!-- End Slider item -->\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- /.End row -->\
        </div>\
    </div>\
</section>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});