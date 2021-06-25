from django.shortcuts import render
from video.forms import QueueForm

# Create your views here.
def video(request):
    form = QueueForm()
    data ={
        'form': form
    }
    if request.method == 'POST':
        form = QueueForm(request.POST)
        if form.is_valid():
            form.save()

    return render(request,'video/index.html', data)
