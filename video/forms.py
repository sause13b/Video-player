from video.models import Queue
from django.forms import ModelForm, TextInput
from django import forms


class QueueForm(ModelForm):
    class Meta:
        model = Queue
        fields = ['element']
        widgets = {
            "element": TextInput(attrs={
                "class": 'form-control',
                "id": 'videoinput'

            }),
        }

