const FooterContainer = () => {
  return `
    <footer class="footer">
        <section class="container footer-main">
            <section class=" footer-section">
                <ul class="footer-menu">
                    <li class="footer-list">
                        <a href=""> RESOURCES </a>
                    </li>
                    <li class="footer-list">
                        <a href=""> GIFT CARDS </a>
                    </li>
                    <li class="footer-list">
                        <a href="">FIND A STORE</a>
                    </li>
                    <li class="footer-list">
                        <a href="">BECOME A MEMBER </a>
                    </li>
                    <li class="footer-list">
                        <a href=""> NIKE X NBA </a>
                    </li>
                    <li class="footer-list">
                        <a href=""> NIKE JOURNAL </a>
                    </li>
                    <li class="footer-list">
                        <a href=""> Site Feedback </a>
                    </li>
                </ul>
                    <hr class="line-width">
                    <ul class="footer-menu">
                      <li class="footer-list">
                          <a href=""> HELP </a>
                      </li>
                        <ul>
                        <li class="footer-list">
                        <a href=""> Get Help</a>
                        </li>
                        <li class="footer-list">
                            <a href="">Order Status</a>
                        </li>
                        <li class="footer-list">
                            <a href="">Shipping and Delivery </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Returns </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Order Cancellation </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Payment Options </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Gift Card Balance </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Contact Us </a>
                        </li>
                    </ul>
                </ul>
                <ul class="footer-menu">
                    <li class="footer-list">
                        <a href=""> COMPANY </a>
                    </li>
                    <ul> 
                        <li class="footer-list">
                            <a href=""> About Nike </a>
                        </li>
                        <li class="footer-list">
                            <a href="">News</a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Careers </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Investors </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> purpose </a>
                        </li>
                        <li class="footer-list">
                            <a href=""> Sustainability </a>
                        </li>
                    </ul>
                </ul>
                <ul class="footer-menu">
                <li class="footer-list">
                    <a href=""> PROMOTIONS & DISCOUNTS </a>
                </li>
                <ul>

                
                <li class="footer-list">
                    <a href=""> Student </a>
                </li>
                <li class="footer-list">
                    <a href="">Military</a>
                </li>
                <li class="footer-list">
                    <a href="">Teacher </a>
                </li>
                <li class="footer-list">
                    <a href=""> First Responders & Medical Professionals </a>
                </li>
                <li class="footer-list">
                    <a href=""> Birthday  </a>
                </li>
                </ul>
                </ul>
            </section>
        <section class="footer-main-media">
            <ul class="footer-media">
            <li class="footer-list">
                <a href=""> <i class="fa-brands fa-twitter"></i> </a>
            </li>
            <li class="footer-list">
                <a href=""> <i class="fa-brands fa-facebook"></i> </a>
            </li>
            <li class="footer-list">
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
            <li class="footer-list">
                <a href=""><i class="fa-brands fa-instagram"></i> </a>
            </li>
            </ul>
        </section>
    </section>
    
    
    </section>
    <section class="">
      <section class="info-footer container">
        <ul class="footer-guide">
          <li class="footer-list">
            <a href=""> United States</a>
          </li>
          <li class="footer-list">
            <a href=""> © 2024 Nike, Inc. All Rights Reserved </a>
          </li>
        </ul>
        <ul class="footer-guide">
          <li class="footer-list">
            <a href=""> Guides</a>
          </li>
          <li class="footer-list">
            <a href=""> Terms of Sale </a>
          </li>
          <li class="footer-list">
            <a href="">Terms of Use</a>
          </li>
          <li class="footer-list">
            <a href="">Nike Privacy Policy </a>
          </li>  
        </ul>
        <ul class="privacy">
          <li class="footer-list">
            <a href="">Your Privacy Choice </a>
          </li>
        </ul>
        <ul class="footer-guide">
          <li class="footer-list">
            <a href=""> CA Supply Chains Act</a>
          </li>
        </ul>
      </section>
      
    </section>
    
  </footer>
    `;
};

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FooterContainer();
  }
}

customElements.define("footer-component", Footer);
