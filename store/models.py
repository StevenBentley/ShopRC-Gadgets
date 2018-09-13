from django.db import models
from django.contrib.auth.models import User


class Email(models.Model):
    subject = models.CharField(max_length=100)
    message = models.TextField()
    images = models.ImageField()

    def __str__(self):
        return "Subject: {}".format(self.subject)


class Contact(models.Model):
    email = models.CharField(max_length=254, help_text='Required. Need valid email address.')
    subject = models.CharField(max_length=150)
    message = models.CharField(max_length=500)

    def __str__(self):
        return "{} {}".format(self.subject, self.message)
