from django.shortcuts import render
from video.forms import QueueForm
from .models import Queue
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import redirect


def video(request):
    video = Queue.objects.all().order_by('id')

    obj = json.dumps(list(video.values()), cls=DjangoJSONEncoder)
    form = QueueForm()
    data ={
        'video': obj,
        'form': form
    }
    print(obj)
    if request.method == 'POST':
        form = QueueForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')

    return render(request,'video/index.html', data)


def clear(request):
    video = Queue.objects.all().delete()
    return redirect('video')
