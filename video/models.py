from django.db import models


class Queue(models.Model):
    element = models.CharField(max_length=100, null=True)
