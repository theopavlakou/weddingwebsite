#! /usr/local/bin/python3

import yate
import cgi

formData = cgi.FieldStorage()
print(yate.start_response())
print(yate.include_head("Some title"))
print(yate.start_body())
firstName = formData["firstname"].value
surname = formData["surname"].value
# TODO Must check the information actually is valid (again, server side)
# and must ensure that they are not already in the system.
print(yate.include_section("twelve columns", "We'll see you there!", "You have now joined the guest list " + firstName + " " + surname + "!" + '<br><br><a class="button" href="../index.html">Go back</a>'))
print(yate.end_body())
print(yate.include_footer())