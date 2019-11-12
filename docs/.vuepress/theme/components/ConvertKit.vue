<template>
  <div>
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <form action="https://app.convertkit.com/forms/1110975/subscriptions" style="background-color: rgb(255, 255, 255); border-radius: 6px;" class="seva-form formkit-form" method="post" data-sv-form="1110975" data-uid="c028204cbf" data-format="modal" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:null,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:null},&quot;slide_in&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;sticky_bar&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null}},&quot;version&quot;:5}" min-width="400 500 600 700 800">
    <div data-style="full">
      <div style="background-color: rgb(249, 250, 251);" data-element="column" class="formkit-column">
        <div style="opacity: 0.3;" class="formkit-background"></div>
        <div class="formkit-header" style="color: rgb(77, 77, 77); font-size: 20px; font-weight: 700;" data-element="header">
          <h1>Sign up for our free <br>3-week Remote Work course!</h1>
        </div>
        <div class="formkit-subheader" style="color: rgb(104, 104, 104); font-size: 15px;" data-element="subheader">
          Subscribe to get our latest content by email.
        </div>
      </div>
      <div data-element="column" class="formkit-column">
        <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" class="seva-fields formkit-fields">
          <div class="formkit-field">
            <input class="formkit-input" aria-label="Your first name" style="border-color: rgb(227, 227, 227); border-radius: 4px; color: rgb(0, 0, 0); font-weight: 400;" name="fields[first_name]" required="" placeholder="Your first name" type="text">
          </div>
          <div class="formkit-field">
            <input class="formkit-input" name="email_address" style="border-color: rgb(227, 227, 227); border-radius: 4px; color: rgb(0, 0, 0); font-weight: 400;" placeholder="Your email address" required="" type="email">
          </div>
          <div class="formkit-field">
            <div data-group="dropdown" class="formkit-6975" type="Custom" order="2" save_as="Tag" group="field">
              <select class="formkit-select" style="border-color: rgb(227, 227, 227); border-radius: 4px; color: rgb(0, 0, 0); font-weight: 400;" data-element="tags-select" name="tags[]" required="">
                <option value="">Which course are you interested in?</option>
                <option value="1167065">Building a Remote Team</option>
                <option value="1167066">Working Remotely</option>
              </select>
            </div>
          </div>
          <div class="formkit-field">
            <div data-group="dropdown" class="formkit-5227" type="Custom" order="3" save_as="Tag" group="field">
              <select class="formkit-select" style="border-color: rgb(227, 227, 227); border-radius: 4px; color: rgb(0, 0, 0); font-weight: 400;" data-element="tags-select" name="tags[]" required="">
                <option value="">What department do you work in?</option>
                <option value="1167080">Software development/Engineering</option>
                <option value="1167082">Product Design</option>
                <option value="1167085">HR/Hiring/Recruiting</option>
                <option value="1167506">Founder/Leadership</option>
                <option value="1167084">Other</option>
              </select>
            </div>
          </div>
          <button data-element="submit" class="formkit-submit formkit-submit" style="background-color: rgb(22, 119, 190); border-radius: 24px; color: rgb(255, 255, 255); font-weight: 700;">
            <div class="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Sign up for free!</span>
          </button>
        </div>
        <div class="formkit-guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;" data-element="guarantee">
          <p>We won't send you spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ConvertKit',
};
</script>

<style lang="stylus">
.formkit-form[data-uid="c028204cbf"] *{
    box-sizing:border-box;
}
.formkit-form[data-uid="c028204cbf"]{
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
}
.formkit-form[data-uid="c028204cbf"] legend{
    border:none;
    font-size:inherit;
    margin-bottom:10px;
    padding:0;
    position:relative;
    display:table;
}
.formkit-form[data-uid="c028204cbf"] fieldset{
    border:0;
    padding:0.01em 0 0 0;
    margin:0;
    min-width:0;
}
.formkit-form[data-uid="c028204cbf"] body:not(:-moz-handler-blocked) fieldset{
    display:table-cell;
}
.formkit-form[data-uid="c028204cbf"] h1,.formkit-form[data-uid="c028204cbf"] h2,.formkit-form[data-uid="c028204cbf"] h3,.formkit-form[data-uid="c028204cbf"] h4,.formkit-form[data-uid="c028204cbf"] h5,.formkit-form[data-uid="c028204cbf"] h6{
    color:inherit;
    font-size:inherit;
    font-weight:inherit;
}
.formkit-form[data-uid="c028204cbf"] p{
    color:inherit;
    font-size:inherit;
    font-weight:inherit;
}
.formkit-form[data-uid="c028204cbf"] hr:not([template-default]),.formkit-form[data-uid="c028204cbf"] .blockquote:not([template-default]),.formkit-form[data-uid="c028204cbf"] .ordered-list:not([template-default]),.formkit-form[data-uid="c028204cbf"] .unordered-list:not([template-default]){
    text-align:left;
    color:inherit;
    font-style:initial;
}
.formkit-form[data-uid="c028204cbf"][data-format="modal"]{
    display:none;
}
.formkit-form[data-uid="c028204cbf"][data-format="slide in"]{
    display:none;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input,.formkit-form[data-uid="c028204cbf"] .formkit-select,.formkit-form[data-uid="c028204cbf"] .formkit-checkboxes{
    width:100%;
}
.formkit-form[data-uid="c028204cbf"] .formkit-button,.formkit-form[data-uid="c028204cbf"] .formkit-submit{
    border:0;
    border-radius:5px;
    color:#ffffff;
    cursor:pointer;
    display:inline-block;
    text-align:center;
    font-size:15px;
    font-weight:500;
    cursor:pointer;
    margin-bottom:15px;
    overflow:hidden;
    padding:0;
    position:relative;
    vertical-align:middle;
}
.formkit-form[data-uid="c028204cbf"] .formkit-button:hover,.formkit-form[data-uid="c028204cbf"] .formkit-submit:hover,.formkit-form[data-uid="c028204cbf"] .formkit-button:focus,.formkit-form[data-uid="c028204cbf"] .formkit-submit:focus{
    outline:none;
}
.formkit-form[data-uid="c028204cbf"] .formkit-button:hover > span,.formkit-form[data-uid="c028204cbf"] .formkit-submit:hover > span,.formkit-form[data-uid="c028204cbf"] .formkit-button:focus > span,.formkit-form[data-uid="c028204cbf"] .formkit-submit:focus > span{
    background-color:rgba(0,0,0,0.1);
}
.formkit-form[data-uid="c028204cbf"] .formkit-button > span,.formkit-form[data-uid="c028204cbf"] .formkit-submit > span{
    display:block;
    -webkit-transition:all 300ms ease-in-out;
    transition:all 300ms ease-in-out;
    padding:12px 24px;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input{
    background:#ffffff;
    font-size:15px;
    padding:12px;
    border:1px solid #e3e3e3;
    -webkit-flex:1 0 auto;
    -ms-flex:1 0 auto;
    flex:1 0 auto;
    line-height:1.4;
    margin:0;
    -webkit-transition:border-color ease-out 300ms;
    transition:border-color ease-out 300ms;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input:focus{
    outline:none;
    border-color:#1677be;
    -webkit-transition:border-color ease 300ms;
    transition:border-color ease 300ms;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input::-webkit-input-placeholder{
    color:inherit;
    opacity:0.8;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input::-moz-placeholder{
    color:inherit;
    opacity:0.8;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input:-ms-input-placeholder{
    color:inherit;
    opacity:0.8;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input::placeholder{
    color:inherit;
    opacity:0.8;
}
.formkit-form[data-uid="c028204cbf"] [data-group="dropdown"]{
    position:relative;
    display:inline-block;
    width:100%;
}
.formkit-form[data-uid="c028204cbf"] [data-group="dropdown"]::before{
    content:"";
    top:calc(50% - 2.5px);
    right:10px;
    position:absolute;
    pointer-events:none;
    border-color:#4f4f4f transparent transparent transparent;
    border-style:solid;
    border-width:6px 6px 0 6px;
    height:0;
    width:0;
    z-index:999;
}
.formkit-form[data-uid="c028204cbf"] [data-group="dropdown"] select{
    height:auto;
    width:100%;
    cursor:pointer;
    color:#333333;
    line-height:1.4;
    margin-bottom:0;
    padding:0 6px;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    font-size:15px;
    padding:12px;
    padding-right:25px;
    border:1px solid #e3e3e3;
    background:#ffffff;
}
.formkit-form[data-uid="c028204cbf"] [data-group="dropdown"] select:focus{
    outline:none;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"]{
    text-align:left;
    margin:0;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"]{
    margin-bottom:10px;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] *{
    cursor:pointer;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{
    margin-bottom:0;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{
    display:none;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{
    content:none;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{
    border-color:#ffffff;
    content:"";
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{
    background:#10bf7a;
    border-color:#10bf7a;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] label{
    position:relative;
    display:inline-block;
    padding-left:28px;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] label::after{
    position:absolute;
    content:"";
    display:inline-block;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] label::before{
    height:16px;
    width:16px;
    border:1px solid #e3e3e3;
    background:#ffffff;
    left:0px;
    top:3px;
}
.formkit-form[data-uid="c028204cbf"] [data-group="checkboxes"] [data-group="checkbox"] label::after{
    height:4px;
    width:8px;
    border-left:2px solid #4d4d4d;
    border-bottom:2px solid #4d4d4d;
    -webkit-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    transform:rotate(-45deg);
    left:4px;
    top:8px;
}
.formkit-form[data-uid="c028204cbf"] .formkit-alert{
    background:#f9fafb;
    border:1px solid #e3e3e3;
    border-radius:5px;
    -webkit-flex:1 0 auto;
    -ms-flex:1 0 auto;
    flex:1 0 auto;
    list-style:none;
    margin:25px auto;
    padding:12px;
    text-align:center;
    width:100%;
}
.formkit-form[data-uid="c028204cbf"] .formkit-alert:empty{
    display:none;
}
.formkit-form[data-uid="c028204cbf"] .formkit-alert-success{
    background:#d3fbeb;
    border-color:#10bf7a;
    color:#0c905c;
}
.formkit-form[data-uid="c028204cbf"] .formkit-alert-error{
    background:#fde8e2;
    border-color:#f2643b;
    color:#ea4110;
}
.formkit-form[data-uid="c028204cbf"] .formkit-spinner{
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    height:0px;
    width:0px;
    margin:0 auto;
    position:absolute;
    top:0;
    left:0;
    right:0;
    width:0px;
    overflow:hidden;
    text-align:center;
    -webkit-transition:all 300ms ease-in-out;
    transition:all 300ms ease-in-out;
}
.formkit-form[data-uid="c028204cbf"] .formkit-spinner > div{
    margin:auto;
    width:12px;
    height:12px;
    background-color:#fff;
    opacity:0.3;
    border-radius:100%;
    display:inline-block;
    -webkit-animation:formkit-bouncedelay-formkit-form-data-uid-c028204cbf- 1.4s infinite ease-in-out both;
    animation:formkit-bouncedelay-formkit-form-data-uid-c028204cbf- 1.4s infinite ease-in-out both;
}
.formkit-form[data-uid="c028204cbf"] .formkit-spinner > div:nth-child(1){
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s;
}
.formkit-form[data-uid="c028204cbf"] .formkit-spinner > div:nth-child(2){
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s;
}
.formkit-form[data-uid="c028204cbf"] .formkit-submit[data-active] .formkit-spinner{
    opacity:1;
    height:100%;
    width:50px;
}
.formkit-form[data-uid="c028204cbf"] .formkit-submit[data-active] .formkit-spinner ~ span{
    opacity:0;
}
.formkit-form[data-uid="c028204cbf"] .formkit-powered-by[data-active="false"]{
    opacity:0.35;
}
@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-c028204cbf-{
    0%,80%,100%{
        -webkit-transform:scale(0);
        -ms-transform:scale(0);
        transform:scale(0);
    }
    40%{
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        transform:scale(1);
    }
}
@keyframes formkit-bouncedelay-formkit-form-data-uid-c028204cbf-{
    0%,80%,100%{
        -webkit-transform:scale(0);
        -ms-transform:scale(0);
        transform:scale(0);
    }
    40%{
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        transform:scale(1);
    }
}
 .formkit-form[data-uid="c028204cbf"]{
    box-shadow:0 2px 15px 0 rgba(210,214,220,0.5);
    max-width:700px;
    overflow:hidden;
}
.formkit-form[data-uid="c028204cbf"] [data-style="full"]{
    width:100%;
    display:block;
}
.formkit-form[data-uid="c028204cbf"] .formkit-header{
    margin-top:0;
    margin-bottom:20px;
}
.formkit-form[data-uid="c028204cbf"] .formkit-subheader{
    margin:15px 0;
}
.formkit-form[data-uid="c028204cbf"] .formkit-column{
    padding:20px;
    position:relative;
}
.formkit-form[data-uid="c028204cbf"] .formkit-column:nth-child(2){
    border-top:1px solid #e9ecef;
}
.formkit-form[data-uid="c028204cbf"] .formkit-background{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-size:cover;
    background-position:center;
    opacity:0.5;
    z-index:1;
}
.formkit-form[data-uid="c028204cbf"] .formkit-header,.formkit-form[data-uid="c028204cbf"] .formkit-subheader,.formkit-form[data-uid="c028204cbf"] .formkit-image{
    z-index:2;
    position:relative;
}
.formkit-form[data-uid="c028204cbf"] .formkit-field{
    margin:0 0 15px 0;
}
.formkit-form[data-uid="c028204cbf"] .formkit-input,.formkit-form[data-uid="c028204cbf"] .formkit-submit{
    width:100%;
}
.formkit-form[data-uid="c028204cbf"] .formkit-guarantee{
    font-size:13px;
    text-align:center;
    margin:0 0 15px 0;
}
.formkit-form[data-uid="c028204cbf"] .formkit-guarantee > p{
    margin:0;
}
.formkit-form[data-uid="c028204cbf"] .formkit-powered-by{
    color:#7d7d7d;
    display:block;
    font-size:12px;
    margin-bottom:0;
    text-align:center;
}
.formkit-form[data-uid="c028204cbf"][min-width~="600"] [data-style="full"],.formkit-form[data-uid="c028204cbf"][min-width~="700"] [data-style="full"],.formkit-form[data-uid="c028204cbf"][min-width~="800"] [data-style="full"]{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
}
.formkit-form[data-uid="c028204cbf"][min-width~="600"] .formkit-submit,.formkit-form[data-uid="c028204cbf"][min-width~="700"] .formkit-submit,.formkit-form[data-uid="c028204cbf"][min-width~="800"] .formkit-submit{
    width:auto;
}
.formkit-form[data-uid="c028204cbf"][min-width~="600"] .formkit-column,.formkit-form[data-uid="c028204cbf"][min-width~="700"] .formkit-column,.formkit-form[data-uid="c028204cbf"][min-width~="800"] .formkit-column{
    padding:40px;
}
.formkit-form[data-uid="c028204cbf"][min-width~="600"] .formkit-column:nth-child(2),.formkit-form[data-uid="c028204cbf"][min-width~="700"] .formkit-column:nth-child(2),.formkit-form[data-uid="c028204cbf"][min-width~="800"] .formkit-column:nth-child(2){
    border-top:none;
}
</style>