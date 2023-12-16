import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class Button extends JFrame
{
JButton yes,no,close;
JLabel lbl;
Button()
{
yes = new JButton("YES");
no = new JButton ("No");
close = new JButton ("CLOSE");
lbl = new JLabel ("");
setLayout (new GridLayout(4,1));
setSize (400,200);
add(yes);
add(no);
add(close);
add(lbl);
setVisible(true);
ButtonHandler bh = new ButtonHandler();
yes.addActionListener(bh);
yes.addActionListener(bh);
no.addActionListener(bh);
close.addActionListener(bh);
}
class ButtonHandler implements ActionListener
{
public void actionPerformed(ActionEvent ae)
{
if (ae.getSource()==yes)
{
lbl.setText("Button Yes is pressed");
}
if (ae.getSource()==no)
{
lbl.setText("Button No is pressed");
}
if (ae.getSource()==close)
{
System.exit(0);
}
}
}
public static void main(String args[])
{
new Button();
}
}