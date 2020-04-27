from django.db import models

# Create your models here.

class UserModel(models.Model):
    userid = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    pw = models.CharField(max_length=100)
    dist_num = models.CharField(max_length=15)
    phone = models.CharField(max_length=14)
    
