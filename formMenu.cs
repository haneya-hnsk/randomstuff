using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace sarpras_dimasr
{
    public partial class formMenu : Form
    {
        public formMenu()
        {
            InitializeComponent();

            string level = Form1.level;
            //MessageBox.Show(level);
            if (level == "mananjemen")
            {
                pinjamBarangToolStripMenuItem.Visible = false;

            }

            else if (level == "admin")
            {

                laporanToolStripMenuItem.Visible = false;

            }
            else if (level == "peminjam")
            {
                dataBarangToolStripMenuItem.Visible = false;
                laporanToolStripMenuItem.Visible = false;
                suplierToolStripMenuItem.Visible = false;
                barangMasukToolStripMenuItem.Visible = false;
                barangKeluarToolStripMenuItem.Visible = false;


            }
        }

        private void formMenu_Load(object sender, EventArgs e)
        {
            
        }

        private void dataBarangToolStripMenuItem_Click(object sender, EventArgs e)
        {
            formBarang fb = new formBarang();
          //  this.show();
            fb.Show();
        }

        private void pinjamBarangToolStripMenuItem_Click(object sender, EventArgs e)
        {
            formPinjamBarang pb = new formPinjamBarang();
           pb.Show();
        }

        private void barangMasukToolStripMenuItem_Click(object sender, EventArgs e)
        {
            formBarangMasuk fb = new formBarangMasuk();
            // this.Show();
            fb.Show();
        }

        private void suplierToolStripMenuItem_Click(object sender, EventArgs e)
        {
            formSuplier fs = new formSuplier();
            fs.Show();
        }

        private void barangKeluarToolStripMenuItem_Click(object sender, EventArgs e)
        {
            formBarangKeluar fs = new formBarangKeluar();
            fs.Show();
        }
    }
}
