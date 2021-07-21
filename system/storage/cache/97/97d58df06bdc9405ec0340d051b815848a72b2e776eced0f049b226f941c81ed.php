<?php

/* default/template/checkout/login.twig */
class __TwigTemplate_5228d495d02af7cf2b28414c38b1976ca466d5c11dcd9417b6fe5fe83b2a2e7c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<div class=\"row\">
  <div class=\"col-sm-6\">
    <h2>";
        // line 3
        echo (isset($context["text_new_customer"]) ? $context["text_new_customer"] : null);
        echo "</h2>
    <p>";
        // line 4
        echo (isset($context["text_checkout"]) ? $context["text_checkout"] : null);
        echo "</p>
    <div class=\"radio\">
      <label>";
        // line 6
        if (((isset($context["account"]) ? $context["account"] : null) == "register")) {
            // line 7
            echo "        <input type=\"radio\" name=\"account\" value=\"register\" checked=\"checked\" />";
        } else {
            // line 9
            echo "        <input type=\"radio\" name=\"account\" value=\"register\" />";
        }
        // line 11
        echo (isset($context["text_register"]) ? $context["text_register"] : null);
        echo "</label>
    </div>";
        // line 13
        if ((isset($context["checkout_guest"]) ? $context["checkout_guest"] : null)) {
            // line 14
            echo "    <div class=\"radio\">
      <label>";
            // line 15
            if (((isset($context["account"]) ? $context["account"] : null) == "guest")) {
                // line 16
                echo "        <input type=\"radio\" name=\"account\" value=\"guest\" checked=\"checked\" />";
            } else {
                // line 18
                echo "        <input type=\"radio\" name=\"account\" value=\"guest\" />";
            }
            // line 20
            echo (isset($context["text_guest"]) ? $context["text_guest"] : null);
            echo "</label>
    </div>";
        }
        // line 23
        echo "    <p>";
        echo (isset($context["text_register_account"]) ? $context["text_register_account"] : null);
        echo "</p>
    <input type=\"button\" value=\"";
        // line 24
        echo (isset($context["button_continue"]) ? $context["button_continue"] : null);
        echo "\" id=\"button-account\" data-loading-text=\"";
        echo (isset($context["text_loading"]) ? $context["text_loading"] : null);
        echo "\" class=\"btn btn-primary\" />
  </div>
  <div class=\"col-sm-6\">
    <h2>";
        // line 27
        echo (isset($context["text_returning_customer"]) ? $context["text_returning_customer"] : null);
        echo "</h2>
    <p>";
        // line 28
        echo (isset($context["text_i_am_returning_customer"]) ? $context["text_i_am_returning_customer"] : null);
        echo "</p>
    <div class=\"form-group\">
      <label class=\"control-label\" for=\"input-email\">";
        // line 30
        echo (isset($context["entry_email"]) ? $context["entry_email"] : null);
        echo "</label>
      <input type=\"text\" name=\"email\" value=\"\" placeholder=\"";
        // line 31
        echo (isset($context["entry_email"]) ? $context["entry_email"] : null);
        echo "\" id=\"input-email\" class=\"form-control\" />
    </div>
    <div class=\"form-group\">
      <label class=\"control-label\" for=\"input-password\">";
        // line 34
        echo (isset($context["entry_password"]) ? $context["entry_password"] : null);
        echo "</label>
      <input type=\"password\" name=\"password\" value=\"\" placeholder=\"";
        // line 35
        echo (isset($context["entry_password"]) ? $context["entry_password"] : null);
        echo "\" id=\"input-password\" class=\"form-control\" />
      <a href=\"";
        // line 36
        echo (isset($context["forgotten"]) ? $context["forgotten"] : null);
        echo "\">";
        echo (isset($context["text_forgotten"]) ? $context["text_forgotten"] : null);
        echo "</a></div>
    <input type=\"button\" value=\"";
        // line 37
        echo (isset($context["button_login"]) ? $context["button_login"] : null);
        echo "\" id=\"button-login\" data-loading-text=\"";
        echo (isset($context["text_loading"]) ? $context["text_loading"] : null);
        echo "\" class=\"btn btn-primary\" />
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "default/template/checkout/login.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  108 => 37,  102 => 36,  98 => 35,  94 => 34,  88 => 31,  84 => 30,  79 => 28,  75 => 27,  67 => 24,  62 => 23,  57 => 20,  54 => 18,  51 => 16,  49 => 15,  46 => 14,  44 => 13,  40 => 11,  37 => 9,  34 => 7,  32 => 6,  27 => 4,  23 => 3,  19 => 1,);
    }
}
/* <div class="row">*/
/*   <div class="col-sm-6">*/
/*     <h2>{{ text_new_customer }}</h2>*/
/*     <p>{{ text_checkout }}</p>*/
/*     <div class="radio">*/
/*       <label> {% if account == 'register' %}*/
/*         <input type="radio" name="account" value="register" checked="checked" />*/
/*         {% else %}*/
/*         <input type="radio" name="account" value="register" />*/
/*         {% endif %}*/
/*         {{ text_register }}</label>*/
/*     </div>*/
/*     {% if checkout_guest %}*/
/*     <div class="radio">*/
/*       <label> {% if account == 'guest' %}*/
/*         <input type="radio" name="account" value="guest" checked="checked" />*/
/*         {% else %}*/
/*         <input type="radio" name="account" value="guest" />*/
/*         {% endif %}*/
/*         {{ text_guest }}</label>*/
/*     </div>*/
/*     {% endif %}*/
/*     <p>{{ text_register_account }}</p>*/
/*     <input type="button" value="{{ button_continue }}" id="button-account" data-loading-text="{{ text_loading }}" class="btn btn-primary" />*/
/*   </div>*/
/*   <div class="col-sm-6">*/
/*     <h2>{{ text_returning_customer }}</h2>*/
/*     <p>{{ text_i_am_returning_customer }}</p>*/
/*     <div class="form-group">*/
/*       <label class="control-label" for="input-email">{{ entry_email }}</label>*/
/*       <input type="text" name="email" value="" placeholder="{{ entry_email }}" id="input-email" class="form-control" />*/
/*     </div>*/
/*     <div class="form-group">*/
/*       <label class="control-label" for="input-password">{{ entry_password }}</label>*/
/*       <input type="password" name="password" value="" placeholder="{{ entry_password }}" id="input-password" class="form-control" />*/
/*       <a href="{{ forgotten }}">{{ text_forgotten }}</a></div>*/
/*     <input type="button" value="{{ button_login }}" id="button-login" data-loading-text="{{ text_loading }}" class="btn btn-primary" />*/
/*   </div>*/
/* </div>*/
/* */
