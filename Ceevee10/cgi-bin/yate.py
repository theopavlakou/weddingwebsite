
from string import Template

def start_response(resp="text/html"):
    return('Content-type: ' + resp + '\n\n')
    
def include_head(the_title):
    with open('templates/head.html') as headf:
        head_text = headf.read()
    # Template has a method called substitute
    head = Template(head_text)
    return(head.substitute(title=the_title))

def start_body():
    return("<body>")

def end_body():
    return("</body>")

def include_section(the_number_columns, the_title, the_content):
    with open('templates/section.html') as sectionf:
        section_text = sectionf.read()
    section = Template(section_text)
    return(section.substitute(numberColumns=the_number_columns, title=the_title, content=the_content))

def include_footer():
    with open('templates/footer.html') as footerf:
        footer_text = footerf.read()
    return(footer_text)

def include_content(the_content):
    with open('templates/body.html') as bodyf:
        body_text = bodyf.read()
    body = Template(body_text)
    return(body.substitute(content=the_content))

def start_form(the_url, form_type="POST"):
    return('<form action="' + the_url + '" method="' + form_type + '">')

def end_form(submit_msg="Submit"):
    return('<p></p><input type=submit value="' + submit_msg + '"></form>')

def radio_button(rb_name, rb_value):
    return('<input type="radio" name="' + rb_name +
                             '" value="' + rb_value + '"> ' + rb_value + '<br />')
def text_input(rb_name):
    return('<input type="text" name="' + rb_name + '"> ' + '<br />')

def u_list(items):
    u_string = '<ul>'
    for item in items:
        u_string += '<li>' + item + '</li>'
    u_string += '</ul>'
    return(u_string)

def header(header_text, header_level=2):
    return('<h' + str(header_level) + '>' + header_text +
           '</h' + str(header_level) + '>')

def para(para_text):
    return('<p>' + para_text + '</p>') 
