from django.forms import ModelForm
from store.models import Contact


class SignUpForm(ModelForm):
    class Meta:
        model = Contact
        fields = ('email', 'subject', 'message')
