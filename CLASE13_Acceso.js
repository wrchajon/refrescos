function go()
{

if (document.formingreso.usuario.value=='Víctor' && document.formingreso.contraseña.value=='examen')
    {
        document.formingreso.submit();
    }
else
    {
        alert('Por favor ingrese, nombre de usuario y contraseña correctos.');
    }
}