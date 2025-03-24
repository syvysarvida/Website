using Microsoft.AspNetCore.Mvc;

public class TransactionController : Controller
{
    public IActionResult Transaction1()
    {
        ViewData["Title"] = "Transaction 1";
        return View();
    }

    public IActionResult Transaction2()
    {
        ViewData["Title"] = "Transaction 2";
        return View();
    }

    public IActionResult Transaction3()
    {
        ViewData["Title"] = "Transaction 3";
        return View();
    }
}
