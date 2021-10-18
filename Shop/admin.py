from django.contrib import admin
from .models import CPU, GPU, RAM, Monitor, Laptop, PcGamer, ORDER, Profile

# Register your models here.
admin.site.register(CPU)
admin.site.register(GPU)
admin.site.register(RAM)
admin.site.register(Monitor)
admin.site.register(Laptop)
admin.site.register(PcGamer)
admin.site.register(ORDER)
admin.site.register(Profile)
